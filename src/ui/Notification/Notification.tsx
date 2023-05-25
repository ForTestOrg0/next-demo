import { renderToString } from 'react-dom/server';
import closeIcon from '../Svg/optimized/times.svg';
import warnIcon from '../Svg/optimized/exclaim.svg';
import errorIcon from '../Svg/optimized/circle-times.svg';
import successIcon from '../Svg/optimized/success.svg';
import progressIcon from '../Svg/optimized/clock.svg';

const DEFAULT_DURATION = 4500; // 4.5s
let notificationCount = 0;
let notificationContainer: HTMLElement | null = null;

const createContainer = () => {
  const container = document.createElement('div');
  container.className =
    'fixed top-middle right-middle flex flex-col overflow-hidden z-40';
  document.body.appendChild(container);
  return container;
};

interface Config {
  title?: string;
  description: JSX.Element | string;
  duration?: number;
}
type Method = 'success' | 'progress' | 'error' | 'warn';

const createOne = (config: Config, method: Method, onClose: () => void) => {
  const wrapper = document.createElement('div');
  const closerIconWrapper = document.createElement('div');
  const content = document.createElement('div');
  const closerIcon = document.createElement('img');
  const methodIcon = document.createElement('img');
  const title = document.createElement('h3');
  const description = document.createElement('div');

  wrapper.style.border = '1px solid #e7e7e7';
  wrapper.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
  wrapper.className =
    'relative flex items-start justify-start gap-large p-large mb-middle bg-white w-96 rounded animate-notification-enter';
  content.className = 'flex flex-col items-start justify-start gap-small';
  closerIconWrapper.className =
    'absolute top-2 right-2 w-7 h-7 p-1 rounded-full hover:cursor-pointer hover:bg-gray-800/10 transition duration-300';
  closerIcon.className = 'w-5 h-5';
  methodIcon.className = 'w-[1.875rem] h-[1.875rem]';
  title.className = 'text-semibold text-base';
  description.className = 'text-normal text-sm';

  closerIcon.alt = '...';
  closerIcon.src = closeIcon.src;
  closerIconWrapper.addEventListener('click', onClose);
  closerIconWrapper.appendChild(closerIcon);

  methodIcon.alt = '...';
  methodIcon.src = successIcon.src;
  if (method === 'error') {
    methodIcon.src = errorIcon.src;
  } else if (method === 'progress') {
    methodIcon.src = progressIcon.src;
    methodIcon.className = `${methodIcon.className} animate-spin`;
    methodIcon.style.animationDuration = '1600ms';
  } else if (method === 'warn') {
    methodIcon.src = warnIcon.src;
  }

  if (config.title) {
    title.textContent = config.title;
    content.appendChild(title);
  }

  if (config.description) {
    const configContennt = config.description;
    description.innerHTML =
      typeof configContennt === 'string'
        ? configContennt
        : renderToString(configContennt);
    content.appendChild(description);
  }

  wrapper.appendChild(closerIconWrapper);
  wrapper.appendChild(methodIcon);
  wrapper.appendChild(content);

  return wrapper;
};

const notificationInstance = (config: Config, method: Method) => {
  if (!notificationContainer) {
    notificationContainer = createContainer();
  }

  const thisOne = createOne(config, method, () => {
    thisOne.classList.add('animate-notification-leave');
  });
  const wrapper = document.createElement('div');
  wrapper.appendChild(thisOne);

  notificationContainer.appendChild(wrapper);
  notificationCount += 1;

  let isTimeout = false;
  let isHovering = false;

  thisOne.addEventListener('mouseenter', () => {
    isHovering = true;
  });
  thisOne.addEventListener('mouseleave', () => {
    isHovering = false;
    if (isTimeout) {
      setTimeout(() => {
        thisOne.classList.add('animate-notification-leave');
      }, 400);
    }
  });

  thisOne.addEventListener('animationend', (e) => {
    e.stopPropagation();
    if (thisOne.classList.contains('animate-notification-enter')) {
      thisOne.classList.remove('animate-notification-enter');
    } else {
      wrapper.style.height = `${thisOne.offsetHeight}px`;
      thisOne.remove();
      wrapper.classList.add('animate-notification-fadeout');
    }
  });

  wrapper.addEventListener('animationend', () => {
    wrapper.remove();
    notificationCount -= 1;

    if (notificationCount === 0) {
      notificationContainer?.remove();
      notificationContainer = null;
    }
  });

  const closer = () => {
    thisOne.classList.add('animate-notification-leave');
  };

  if (config.duration !== 0) {
    setTimeout(
      () => {
        isTimeout = true;
        if (!isHovering) {
          thisOne.classList.add('animate-notification-leave');
        }
      },
      config.duration && config.duration > 1000
        ? config.duration
        : DEFAULT_DURATION
    );
  }

  return closer;
};

export const notification = {
  warn: (config: Config) => notificationInstance(config, 'warn'),
  error: (config: Config) => notificationInstance(config, 'error'),
  success: (config: Config) => notificationInstance(config, 'success'),
  progress: (config: Config) => notificationInstance(config, 'progress'),
};

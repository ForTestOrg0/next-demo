import { renderToString } from 'react-dom/server';
import warnIcon from '../Svg/optimized/exclaim.svg';
import errorIcon from '../Svg/optimized/circle-times.svg';
import successIcon from '../Svg/optimized/success.svg';
import infoIcon from '../Svg/optimized/infomation.svg';

const DEFAULT_DURATION = 4500; // 4.5s
let messageCount = 0;
let messageContainer: HTMLElement | null = null;

const createContainer = () => {
  const container = document.createElement('div');
  container.className =
    'fixed w-fit m-auto top-middle left-0 right-0 flex flex-col overflow-hidden z-40 p-4';
  document.body.appendChild(container);
  return container;
};

type Method = 'success' | 'info' | 'error' | 'warn';

const createOne = (method: Method, content: JSX.Element | string) => {
  const wrapper = document.createElement('div');
  const contentEl = document.createElement('div');
  const methodIcon = document.createElement('img');

  wrapper.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.05)';
  wrapper.className =
    'flex items-center justify-center gap-middle py-2 px-4 mb-middle bg-white w-fit rounded-md animate-message-enter';
  methodIcon.className = 'w-4 h-4';

  methodIcon.alt = '...';
  methodIcon.src = successIcon.src;
  if (method === 'error') {
    methodIcon.src = errorIcon.src;
  } else if (method === 'info') {
    methodIcon.src = infoIcon.src;
  } else if (method === 'warn') {
    methodIcon.src = warnIcon.src;
  }
  contentEl.innerHTML =
    typeof content === 'string' ? content : renderToString(content);

  wrapper.appendChild(methodIcon);
  wrapper.appendChild(contentEl);

  return wrapper;
};

const messageInstance = (
  method: Method,
  content: JSX.Element | string,
  duration?: number
) => {
  if (!messageContainer) {
    messageContainer = createContainer();
  }

  const thisOne = createOne(method, content);
  const wrapper = document.createElement('div');
  wrapper.appendChild(thisOne);

  messageContainer.appendChild(wrapper);
  messageCount += 1;

  let isTimeout = false;
  let isHovering = false;

  thisOne.addEventListener('mouseenter', () => {
    isHovering = true;
  });
  thisOne.addEventListener('mouseleave', () => {
    isHovering = false;
    if (isTimeout) {
      setTimeout(() => {
        thisOne.classList.add('animate-message-leave');
      }, 400);
    }
  });

  thisOne.addEventListener('animationend', (e) => {
    e.stopPropagation();
    if (thisOne.classList.contains('animate-message-enter')) {
      thisOne.classList.remove('animate-message-enter');
    } else {
      wrapper.style.height = `${thisOne.offsetHeight}px`;
      thisOne.remove();
      wrapper.classList.add('animate-message-fadeout');
    }
  });

  wrapper.addEventListener('animationend', () => {
    wrapper.remove();
    messageCount -= 1;

    if (messageCount === 0) {
      messageContainer?.remove();
      messageContainer = null;
    }
  });

  const closer = () => {
    thisOne.classList.add('animate-message-leave');
  };

  if (duration !== 0) {
    setTimeout(
      () => {
        isTimeout = true;
        if (!isHovering) {
          thisOne.classList.add('animate-message-leave');
        }
      },
      duration && duration > 1000 ? duration : DEFAULT_DURATION
    );
  }

  return closer;
};

export const message = {
  info: (content: JSX.Element | string, duration?: number) =>
    messageInstance('info', content, duration),
  warn: (content: JSX.Element | string, duration?: number) =>
    messageInstance('warn', content, duration),
  error: (content: JSX.Element | string, duration?: number) =>
    messageInstance('error', content, duration),
  success: (content: JSX.Element | string, duration?: number) =>
    messageInstance('success', content, duration),
};

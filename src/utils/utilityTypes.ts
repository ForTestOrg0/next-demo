export type RequiredByKeys<T, K extends keyof T> = { [P in K]-?: T[P] } & Pick<T, Exclude<keyof T, K>>

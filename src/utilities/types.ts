

export type AllMandatory<T> = {
    [Property in keyof T]-?: T[Property]
}

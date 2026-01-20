export const generic = () => {
    
    function identity<T>(arg: T): T {
        return arg
    }

    console.log(identity<number>(10))
    console.log(identity<string>("Hello"))

    function getFirstElement<T>(arr: T[]): T {
        return arr[0]
    }

    console.log(getFirstElement<number>([1, 2, 3]))
    console.log(getFirstElement<string>(["a", "b", "c"]))

    interface Box<T> {
        value: T
    }

    const numberBox: Box<number> = { value: 100 }
    const stringBox: Box<string> = { value: "TypeScript" }

    console.log(numberBox.value)
    console.log(stringBox.value)

    function combine<T, U>(a: T, b: U): [T, U] {
        return [a, b]
    }

    console.log(combine<number, string>(10, "TypeScript"))
    console.log(combine<number, number>(20, 30))
    console.log(combine<string, boolean>("Test", true))
}
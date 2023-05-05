function func<T>(s: T): T {
    return s
}

// type IMiddleware = { name: string; fn: ({ middlewareData, next }: { middlewareData: Record<string, any>; next: () => void }) => Promise<{ data: Record<string, any> }>; };

// compose 函数

// compose（IMiddleware[]）

// return {

//     name1: {..data },

//     name2: {..data }

// }
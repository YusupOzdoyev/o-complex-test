export function ObjectToParams(obj: any) {
    let params = []
    for (const objKey in obj) {
        params.push(`${objKey}=${obj[objKey]}`)
    }
    return params.join('&')
}

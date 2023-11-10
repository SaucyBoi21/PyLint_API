export interface PylintResponse {
    type: string
    module: string
    obj: string
    line: number
    column: number
    endLine: number
    endColumn: number,
    path: string,
    symbol: string
    message: string
    message_id: string
}

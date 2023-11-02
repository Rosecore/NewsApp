export type BuildMode = 'production' | 'development'
export interface BuildPath{
    entry:string,
    build: string,
    html: string,
    src: string
}
export interface BuildEvn{
    mode:BuildMode
    port:number
}
export interface BuildOptions{
    mode:BuildMode,
    paths: BuildPath,
    isDev: boolean,
    port: number
}
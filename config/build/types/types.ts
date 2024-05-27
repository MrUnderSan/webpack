export interface BuildPaths {
  entry: string
  output: string
  html: string
  public: string
  src: string
}

export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'

export interface BuildOptions {
  port: number
  paths: BuildPaths
  mode: BuildMode
  platform: BuildPlatform
  analyzer?: boolean
}
export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () => {
  return Array.from(Array(12), () => new Array(20).fill([0, "clear"]))
}

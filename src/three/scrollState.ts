export const scrollState = {
  /** 0..1 across the whole page */
  progress: 0,
  /** smoothed scroll velocity, roughly -1..1 */
  velocity: 0,
  /** normalized mouse position -1..1 */
  mouseX: 0,
  mouseY: 0,
  reducedMotion: false,
}

export const SECTION_COUNT = 5

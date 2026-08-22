import { Component, type ReactNode } from 'react'

export class SceneErrorBoundary extends Component<
  { children: ReactNode; onFallback: () => void },
  { crashed: boolean }
> {
  state = { crashed: false }

  static getDerivedStateFromError() {
    return { crashed: true }
  }

  componentDidCatch() {
    this.props.onFallback()
  }

  render() {
    if (this.state.crashed) return null
    return this.props.children
  }
}

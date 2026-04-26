const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink" aria-hidden="true">
      <div className="absolute inset-0 grid-coords opacity-40" />
    </div>
  )
}

export default AnimatedBackground

export default function Marquee({ items }) {
  // Rendered twice back-to-back so the CSS keyframe (translateX(-50%)) loops seamlessly,
  // exactly like the original markup.
  return (
    <div className="mq">
      <div className="mq-t">
        <span style={{ display: 'flex' }}>
          {items.map((name, i) => (
            <b key={`a-${i}`}>{name}</b>
          ))}
        </span>
        <span style={{ display: 'flex' }}>
          {items.map((name, i) => (
            <b key={`b-${i}`}>{name}</b>
          ))}
        </span>
      </div>
    </div>
  )
}

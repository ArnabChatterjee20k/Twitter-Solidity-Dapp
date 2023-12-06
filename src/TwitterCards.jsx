export default function TwitterCards({ tweet, author }) {
  return (
    <div style={{padding:"12px" ,border: "2px solid white",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start" }}>
      <p style={{fontSize:"0.8rem"}}>{author}</p>
      <p style={{fontSize:"1.3rem"}}>{tweet}</p>
    </div>
  );
}

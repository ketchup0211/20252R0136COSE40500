function DevChristmasTree() {
  const text = TreeRender(5);
  return (
    <h3 className="typing-text">
      {text}
      <span className="cursor"></span>
    </h3>
  );
}
export default DevChristmasTree;

function TreeRender(height) {
  for (i = 0; i < height; i++) {
    let tree = "";
    for (j = 0; j < height - i; j++) {
      tree = tree + " ";
    }
    for (k = 0; i * 2 - 1; k++) {
      tree = tree + "*";
    }
  }
  return tree;
}

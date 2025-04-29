import k from "../kaplayCtx";

export default function mainMenu() {
  if (!k.getData("best-score")) k.setData("best-score", 0);
  k.onButtonPress("jump", () => k.go("game"));

  const bgPieceWidth = 1920;
  const bgPieces = [
    k.add([k.sprite("chemical1-bg"), k.pos(0, 0), k.scale(2), k.opacity(0.8)]),
    k.add([
      k.sprite("chemical1-bg"),
      k.pos(bgPieceWidth * 2, 0),
      k.scale(2),
      k.opacity(0.8),
    ]),
  ];

  const platformWidth = 1280;
  const platform = [
    k.add([k.sprite("platform"), k.pos(0, 450), k.scale(4)]),
    k.add([k.sprite("platform"), k.pos(0, 450), k.scale(4)]),
  ];
}

import { pipe } from "./pipe";
import { squareMap } from "./squaredMap";

const fourSquare = pipe(
  squareMap,
  squareMap
)

console.log(
  fourSquare([3, 4])
)
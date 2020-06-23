import $ from "jquery";

class Texto {
  texto: string;

  constructor(t: string) {
    this.texto = t;
  }

  center($e: $): void {
    let numLetters: number = this.texto.split("").length;
    let spacesBetweenLetter: number = numLetters - 1;
    let letterSpace: number = 5;
    let letterWidth: number = 50;
    let halfWidth: number;

    halfWidth =
      (letterWidth * numLetters + letterSpace * spacesBetweenLetter) / 2;
    $e.css("margin-left", `calc(50% - ${halfWidth}px)`);
  }

  getTexto(): string {
    return this.texto;
  }

  setTexto(t: string): void {
    this.texto = t;
  }
}
export { Texto };

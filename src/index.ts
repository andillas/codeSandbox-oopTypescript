import $ from "jquery";
import { Letra } from "./clases/letra";
import { Texto } from "./clases/texto";
import "./styles.css";

const TEXTO: Texto = new Texto("FLOR DE PITA");

function printTexto(t: string) {
  let pos: number = 0;

  function printLetter() {
    let objLetra: Letra = new Letra(t[pos]);
    let $newLetra = objLetra.generate();

    $("#container").append($newLetra);

    pos++;
  }

  return printLetter;
}

function initPage(): void {
  var $container: any = $("<div></div>").attr("id", "container");
  $("#app").append($container);

  TEXTO.getTexto()
    .split("")
    .forEach(printTexto(TEXTO.getTexto()));

  TEXTO.center($container);
}
$(initPage);

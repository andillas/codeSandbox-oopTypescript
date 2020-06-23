import $ from "jquery";
import { Texto } from "./texto";

class Letra extends Texto {
  L: string;

  constructor(letra: string) {
    super("");
    this.L = letra;
  }

  generate(): $ {
    let $el: $ = $("<div></div>").html(this.L);

    if (this.L === " ") {
      $el.addClass("espacio");
    } else {
      $el.addClass("letra");
    }

    return $el;
  }
}

export { Letra };

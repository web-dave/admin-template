import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  colors = {
    'w3-amber': {
      color: '#000',
      background: '#ffc107'
    },
    'w3-aqua': {
      color: '#000',
      background: '#00ffff'
    },
    'w3-blue': {
      color: '#fff',
      background: '#2196f3'
    },
    'w3-light-blue': {
      color: '#000',
      background: '#87ceeb'
    },
    'w3-brown': {
      color: '#fff',
      background: '#795548'
    },
    'w3-cyan': {
      color: '#000',
      background: '#00bcd4'
    },
    'w3-blue-grey': {
      color: '#fff',
      background: '#607d8b'
    },
    'w3-blue-gray': {
      color: '#fff',
      background: '#607d8b'
    },
    'w3-green': {
      color: '#fff',
      background: '#4caf50'
    },
    'w3-light-green': {
      color: '#000',
      background: '#8bc34a'
    },
    'w3-indigo': {
      color: '#fff',
      background: '#3f51b5'
    },
    'w3-khaki': {
      color: '#000',
      background: '#f0e68c'
    },
    'w3-lime': {
      color: '#000',
      background: '#cddc39'
    },
    'w3-orange': {
      color: '#000',
      background: '#ff9800'
    },
    'w3-deep-orange': {
      color: '#fff',
      background: '#ff5722'
    },
    'w3-pink': {
      color: '#fff',
      background: '#e91e63'
    },
    'w3-purple': {
      color: '#fff',
      background: '#9c27b0'
    },
    'w3-deep-purple': {
      color: '#fff',
      background: '#673ab7'
    },
    'w3-red': {
      color: '#fff',
      background: '#f44336'
    },
    'w3-sand': {
      color: '#000',
      background: '#fdf5e6'
    },
    'w3-teal': {
      color: '#fff',
      background: '#009688'
    },
    'w3-yellow': {
      color: '#000',
      background: '#ffeb3b'
    },
    'w3-white': {
      color: '#000',
      background: '#fff'
    },
    'w3-black': {
      color: '#fff',
      background: '#000'
    },
    'w3-grey': {
      color: '#000',
      background: '#9e9e9e'
    },
    'w3-gray': {
      color: '#000',
      background: '#9e9e9e'
    },
    'w3-light-grey': {
      color: '#000',
      background: '#f1f1f1'
    },
    'w3-light-gray': {
      color: '#000',
      background: '#f1f1f1'
    },
    'w3-dark-grey': {
      color: '#fff',
      background: '#616161'
    },
    'w3-dark-gray': {
      color: '#fff',
      background: '#616161'
    },
    'w3-pale-red': {
      color: '#000',
      background: '#ffdddd'
    },
    'w3-pale-green': {
      color: '#000',
      background: '#ddffdd'
    },
    'w3-pale-yellow': {
      color: '#000',
      background: '#ffffcc'
    },
    'w3-pale-blue': {
      color: '#000',
      background: '#ddffff'
    }
  };
  constructor() {}
  // found it here:https://codepen.io/andreaswik/pen/YjJqpK
  lightOrDark(color) {
    let r;
    let g;
    let b;
    let hsp;
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
      // If HEX --> store the red, green, blue values in separate variables
      color = color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );

      r = color[1];
      g = color[2];
      b = color[3];
    } else {
      // If RGB --> Convert it to HEX: http://gist.github.com/983661
      color = +(
        '0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&')
      );

      // tslint:disable:no-bitwise
      r = color >> 16;
      g = (color >> 8) & 255;
      b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return '#eeeeee';
    } else {
      return '#333333';
    }
  }

  getColor(color: string) {
    let result = {
      color: '',
      background: ''
    };
    if (this.colors[color]) {
      result = this.colors[color];
    } else {
      result.color = this.lightOrDark(color);
      result.background = color;
    }
    return result;
  }
}

import colors from 'colors-named';
import decimal from '../';

it('=> decimal.length', () => expect(decimal.length).toBe(148));

decimal.forEach((item) => it(`=> ${item.join()} length`, () => expect(item.length).toBe(3)));

it('=> [240, 248, 255]', () => expect(decimal[0].join()).toBe([240, 248, 255].join()));
it('=> [250, 235, 215]', () => expect(decimal[1].join()).toBe([250, 235, 215].join()));
it('=> [0, 255, 255]', () => expect(decimal[2].join()).toBe([0, 255, 255].join()));
it('=> [127, 255, 212]', () => expect(decimal[3].join()).toBe([127, 255, 212].join()));
it('=> [240, 255, 255]', () => expect(decimal[4].join()).toBe([240, 255, 255].join()));
it('=> [245, 245, 220]', () => expect(decimal[5].join()).toBe([245, 245, 220].join()));
it('=> [255, 228, 196]', () => expect(decimal[6].join()).toBe([255, 228, 196].join()));
it('=> [0, 0, 0]', () => expect(decimal[7].join()).toBe([0, 0, 0].join()));
it('=> [255, 235, 205]', () => expect(decimal[8].join()).toBe([255, 235, 205].join()));
it('=> [0, 0, 255]', () => expect(decimal[9].join()).toBe([0, 0, 255].join()));
it('=> [138, 43, 226]', () => expect(decimal[10].join()).toBe([138, 43, 226].join()));
it('=> [165, 42, 42]', () => expect(decimal[11].join()).toBe([165, 42, 42].join()));
it('=> [222, 184, 135]', () => expect(decimal[12].join()).toBe([222, 184, 135].join()));

it('=> aliceblue -> rgb', async () =>
  expect(decimal[colors.indexOf('aliceblue')].join()).toEqual([240, 248, 255].join()));
it('=> antiquewhite -> rgb', async () =>
  expect(decimal[colors.indexOf('antiquewhite')].join()).toEqual([250, 235, 215].join()));
it('=> aqua -> rgb', async () => expect(decimal[colors.indexOf('aqua')].join()).toEqual([0, 255, 255].join()));
it('=> aquamarine -> rgb', async () =>
  expect(decimal[colors.indexOf('aquamarine')].join()).toEqual([127, 255, 212].join()));
it('=> azure -> rgb', async () => expect(decimal[colors.indexOf('azure')].join()).toEqual([240, 255, 255].join()));
it('=> beige -> rgb', async () => expect(decimal[colors.indexOf('beige')].join()).toEqual([245, 245, 220].join()));
it('=> bisque -> rgb', async () => expect(decimal[colors.indexOf('bisque')].join()).toEqual([255, 228, 196].join()));
it('=> black -> rgb', async () => expect(decimal[colors.indexOf('black')].join()).toEqual([0, 0, 0].join()));
it('=> blanchedalmond -> rgb', async () =>
  expect(decimal[colors.indexOf('blanchedalmond')].join()).toEqual([255, 235, 205].join()));
it('=> blue -> rgb', async () => expect(decimal[colors.indexOf('blue')].join()).toEqual([0, 0, 255].join()));
it('=> blueviolet -> rgb', async () =>
  expect(decimal[colors.indexOf('blueviolet')].join()).toEqual([138, 43, 226].join()));
it('=> brown -> rgb', async () => expect(decimal[colors.indexOf('brown')].join()).toEqual([165, 42, 42].join()));
it('=> burlywood -> rgb', async () =>
  expect(decimal[colors.indexOf('burlywood')].join()).toEqual([222, 184, 135].join()));
it('=> cadetblue -> rgb', async () =>
  expect(decimal[colors.indexOf('cadetblue')].join()).toEqual([95, 158, 160].join()));
it('=> chartreuse -> rgb', async () =>
  expect(decimal[colors.indexOf('chartreuse')].join()).toEqual([127, 255, 0].join()));
it('=> chocolate -> rgb', async () =>
  expect(decimal[colors.indexOf('chocolate')].join()).toEqual([210, 105, 30].join()));
it('=> coral -> rgb', async () => expect(decimal[colors.indexOf('coral')].join()).toEqual([255, 127, 80].join()));
it('=> cornflowerblue -> rgb', async () =>
  expect(decimal[colors.indexOf('cornflowerblue')].join()).toEqual([100, 149, 237].join()));
it('=> cornsilk -> rgb', async () =>
  expect(decimal[colors.indexOf('cornsilk')].join()).toEqual([255, 248, 220].join()));
it('=> crimson -> rgb', async () => expect(decimal[colors.indexOf('crimson')].join()).toEqual([220, 20, 60].join()));
it('=> cyan -> rgb', async () => expect(decimal[colors.indexOf('cyan')].join()).toEqual([0, 255, 255].join()));
it('=> darkblue -> rgb', async () => expect(decimal[colors.indexOf('darkblue')].join()).toEqual([0, 0, 139].join()));
it('=> darkcyan -> rgb', async () => expect(decimal[colors.indexOf('darkcyan')].join()).toEqual([0, 139, 139].join()));
it('=> darkgoldenrod -> rgb', async () =>
  expect(decimal[colors.indexOf('darkgoldenrod')].join()).toEqual([184, 134, 11].join()));
it('=> darkgray -> rgb', async () =>
  expect(decimal[colors.indexOf('darkgray')].join()).toEqual([169, 169, 169].join()));
it('=> darkgreen -> rgb', async () => expect(decimal[colors.indexOf('darkgreen')].join()).toEqual([0, 100, 0].join()));
it('=> darkgrey -> rgb', async () =>
  expect(decimal[colors.indexOf('darkgrey')].join()).toEqual([169, 169, 169].join()));
it('=> darkkhaki -> rgb', async () =>
  expect(decimal[colors.indexOf('darkkhaki')].join()).toEqual([189, 183, 107].join()));
it('=> darkmagenta -> rgb', async () =>
  expect(decimal[colors.indexOf('darkmagenta')].join()).toEqual([139, 0, 139].join()));
it('=> darkolivegreen -> rgb', async () =>
  expect(decimal[colors.indexOf('darkolivegreen')].join()).toEqual([85, 107, 47].join()));
it('=> darkorange -> rgb', async () =>
  expect(decimal[colors.indexOf('darkorange')].join()).toEqual([255, 140, 0].join()));
it('=> darkorchid -> rgb', async () =>
  expect(decimal[colors.indexOf('darkorchid')].join()).toEqual([153, 50, 204].join()));
it('=> darkred -> rgb', async () => expect(decimal[colors.indexOf('darkred')].join()).toEqual([139, 0, 0].join()));
it('=> darksalmon -> rgb', async () =>
  expect(decimal[colors.indexOf('darksalmon')].join()).toEqual([233, 150, 122].join()));
it('=> darkseagreen -> rgb', async () =>
  expect(decimal[colors.indexOf('darkseagreen')].join()).toEqual([143, 188, 143].join()));
it('=> darkslateblue -> rgb', async () =>
  expect(decimal[colors.indexOf('darkslateblue')].join()).toEqual([72, 61, 139].join()));
it('=> darkslategray -> rgb', async () =>
  expect(decimal[colors.indexOf('darkslategray')].join()).toEqual([47, 79, 79].join()));
it('=> darkslategrey -> rgb', async () =>
  expect(decimal[colors.indexOf('darkslategrey')].join()).toEqual([47, 79, 79].join()));
it('=> darkturquoise -> rgb', async () =>
  expect(decimal[colors.indexOf('darkturquoise')].join()).toEqual([0, 206, 209].join()));
it('=> darkviolet -> rgb', async () =>
  expect(decimal[colors.indexOf('darkviolet')].join()).toEqual([148, 0, 211].join()));
it('=> deeppink -> rgb', async () => expect(decimal[colors.indexOf('deeppink')].join()).toEqual([255, 20, 147].join()));
it('=> deepskyblue -> rgb', async () =>
  expect(decimal[colors.indexOf('deepskyblue')].join()).toEqual([0, 191, 255].join()));
it('=> dimgray -> rgb', async () => expect(decimal[colors.indexOf('dimgray')].join()).toEqual([105, 105, 105].join()));
it('=> dimgrey -> rgb', async () => expect(decimal[colors.indexOf('dimgrey')].join()).toEqual([105, 105, 105].join()));
it('=> dodgerblue -> rgb', async () =>
  expect(decimal[colors.indexOf('dodgerblue')].join()).toEqual([30, 144, 255].join()));
it('=> firebrick -> rgb', async () =>
  expect(decimal[colors.indexOf('firebrick')].join()).toEqual([178, 34, 34].join()));
it('=> floralwhite -> rgb', async () =>
  expect(decimal[colors.indexOf('floralwhite')].join()).toEqual([255, 250, 240].join()));
it('=> forestgreen -> rgb', async () =>
  expect(decimal[colors.indexOf('forestgreen')].join()).toEqual([34, 139, 34].join()));
it('=> fuchsia -> rgb', async () => expect(decimal[colors.indexOf('fuchsia')].join()).toEqual([255, 0, 255].join()));
it('=> gainsboro -> rgb', async () =>
  expect(decimal[colors.indexOf('gainsboro')].join()).toEqual([220, 220, 220].join()));
it('=> ghostwhite -> rgb', async () =>
  expect(decimal[colors.indexOf('ghostwhite')].join()).toEqual([248, 248, 255].join()));
it('=> gold -> rgb', async () => expect(decimal[colors.indexOf('gold')].join()).toEqual([255, 215, 0].join()));
it('=> goldenrod -> rgb', async () =>
  expect(decimal[colors.indexOf('goldenrod')].join()).toEqual([218, 165, 32].join()));
it('=> gray -> rgb', async () => expect(decimal[colors.indexOf('gray')].join()).toEqual([128, 128, 128].join()));
it('=> green -> rgb', async () => expect(decimal[colors.indexOf('green')].join()).toEqual([0, 128, 0].join()));
it('=> greenyellow -> rgb', async () =>
  expect(decimal[colors.indexOf('greenyellow')].join()).toEqual([173, 255, 47].join()));
it('=> grey -> rgb', async () => expect(decimal[colors.indexOf('grey')].join()).toEqual([128, 128, 128].join()));
it('=> honeydew -> rgb', async () =>
  expect(decimal[colors.indexOf('honeydew')].join()).toEqual([240, 255, 240].join()));
it('=> hotpink -> rgb', async () => expect(decimal[colors.indexOf('hotpink')].join()).toEqual([255, 105, 180].join()));
it('=> indianred -> rgb', async () =>
  expect(decimal[colors.indexOf('indianred')].join()).toEqual([205, 92, 92].join()));
it('=> indigo -> rgb', async () => expect(decimal[colors.indexOf('indigo')].join()).toEqual([75, 0, 130].join()));
it('=> ivory -> rgb', async () => expect(decimal[colors.indexOf('ivory')].join()).toEqual([255, 255, 240].join()));
it('=> khaki -> rgb', async () => expect(decimal[colors.indexOf('khaki')].join()).toEqual([240, 230, 140].join()));
it('=> lavender -> rgb', async () =>
  expect(decimal[colors.indexOf('lavender')].join()).toEqual([230, 230, 250].join()));
it('=> lavenderblush -> rgb', async () =>
  expect(decimal[colors.indexOf('lavenderblush')].join()).toEqual([255, 240, 245].join()));
it('=> lawngreen -> rgb', async () =>
  expect(decimal[colors.indexOf('lawngreen')].join()).toEqual([124, 252, 0].join()));
it('=> lemonchiffon -> rgb', async () =>
  expect(decimal[colors.indexOf('lemonchiffon')].join()).toEqual([255, 250, 205].join()));
it('=> lightblue -> rgb', async () =>
  expect(decimal[colors.indexOf('lightblue')].join()).toEqual([173, 216, 230].join()));
it('=> lightcoral -> rgb', async () =>
  expect(decimal[colors.indexOf('lightcoral')].join()).toEqual([240, 128, 128].join()));
it('=> lightcyan -> rgb', async () =>
  expect(decimal[colors.indexOf('lightcyan')].join()).toEqual([224, 255, 255].join()));
it('=> lightgoldenrodyellow -> rgb', async () =>
  expect(decimal[colors.indexOf('lightgoldenrodyellow')].join()).toEqual([250, 250, 210].join()));
it('=> lightgray -> rgb', async () =>
  expect(decimal[colors.indexOf('lightgray')].join()).toEqual([211, 211, 211].join()));
it('=> lightgreen -> rgb', async () =>
  expect(decimal[colors.indexOf('lightgreen')].join()).toEqual([144, 238, 144].join()));
it('=> lightgrey -> rgb', async () =>
  expect(decimal[colors.indexOf('lightgrey')].join()).toEqual([211, 211, 211].join()));
it('=> lightpink -> rgb', async () =>
  expect(decimal[colors.indexOf('lightpink')].join()).toEqual([255, 182, 193].join()));
it('=> lightsalmon -> rgb', async () =>
  expect(decimal[colors.indexOf('lightsalmon')].join()).toEqual([255, 160, 122].join()));
it('=> lightseagreen -> rgb', async () =>
  expect(decimal[colors.indexOf('lightseagreen')].join()).toEqual([32, 178, 170].join()));
it('=> lightskyblue -> rgb', async () =>
  expect(decimal[colors.indexOf('lightskyblue')].join()).toEqual([135, 206, 250].join()));
it('=> lightslategray -> rgb', async () =>
  expect(decimal[colors.indexOf('lightslategray')].join()).toEqual([119, 136, 153].join()));
it('=> lightslategrey -> rgb', async () =>
  expect(decimal[colors.indexOf('lightslategrey')].join()).toEqual([119, 136, 153].join()));
it('=> lightsteelblue -> rgb', async () =>
  expect(decimal[colors.indexOf('lightsteelblue')].join()).toEqual([176, 196, 222].join()));
it('=> lightyellow -> rgb', async () =>
  expect(decimal[colors.indexOf('lightyellow')].join()).toEqual([255, 255, 224].join()));
it('=> lime -> rgb', async () => expect(decimal[colors.indexOf('lime')].join()).toEqual([0, 255, 0].join()));
it('=> limegreen -> rgb', async () =>
  expect(decimal[colors.indexOf('limegreen')].join()).toEqual([50, 205, 50].join()));
it('=> linen -> rgb', async () => expect(decimal[colors.indexOf('linen')].join()).toEqual([250, 240, 230].join()));
it('=> magenta -> rgb', async () => expect(decimal[colors.indexOf('magenta')].join()).toEqual([255, 0, 255].join()));
it('=> maroon -> rgb', async () => expect(decimal[colors.indexOf('maroon')].join()).toEqual([128, 0, 0].join()));
it('=> mediumaquamarine -> rgb', async () =>
  expect(decimal[colors.indexOf('mediumaquamarine')].join()).toEqual([102, 205, 170].join()));
it('=> mediumblue -> rgb', async () =>
  expect(decimal[colors.indexOf('mediumblue')].join()).toEqual([0, 0, 205].join()));
it('=> mediumorchid -> rgb', async () =>
  expect(decimal[colors.indexOf('mediumorchid')].join()).toEqual([186, 85, 211].join()));
it('=> mediumpurple -> rgb', async () =>
  expect(decimal[colors.indexOf('mediumpurple')].join()).toEqual([147, 112, 219].join()));
it('=> mediumseagreen -> rgb', async () =>
  expect(decimal[colors.indexOf('mediumseagreen')].join()).toEqual([60, 179, 113].join()));
it('=> mediumslateblue -> rgb', async () =>
  expect(decimal[colors.indexOf('mediumslateblue')].join()).toEqual([123, 104, 238].join()));
it('=> mediumspringgreen -> rgb', async () =>
  expect(decimal[colors.indexOf('mediumspringgreen')].join()).toEqual([0, 250, 154].join()));
it('=> mediumturquoise -> rgb', async () =>
  expect(decimal[colors.indexOf('mediumturquoise')].join()).toEqual([72, 209, 204].join()));
it('=> mediumvioletred -> rgb', async () =>
  expect(decimal[colors.indexOf('mediumvioletred')].join()).toEqual([199, 21, 133].join()));
it('=> midnightblue -> rgb', async () =>
  expect(decimal[colors.indexOf('midnightblue')].join()).toEqual([25, 25, 112].join()));
it('=> mintcream -> rgb', async () =>
  expect(decimal[colors.indexOf('mintcream')].join()).toEqual([245, 255, 250].join()));
it('=> mistyrose -> rgb', async () =>
  expect(decimal[colors.indexOf('mistyrose')].join()).toEqual([255, 228, 225].join()));
it('=> moccasin -> rgb', async () =>
  expect(decimal[colors.indexOf('moccasin')].join()).toEqual([255, 228, 181].join()));
it('=> navajowhite -> rgb', async () =>
  expect(decimal[colors.indexOf('navajowhite')].join()).toEqual([255, 222, 173].join()));
it('=> navy -> rgb', async () => expect(decimal[colors.indexOf('navy')].join()).toEqual([0, 0, 128].join()));
it('=> oldlace -> rgb', async () => expect(decimal[colors.indexOf('oldlace')].join()).toEqual([253, 245, 230].join()));
it('=> olive -> rgb', async () => expect(decimal[colors.indexOf('olive')].join()).toEqual([128, 128, 0].join()));
it('=> olivedrab -> rgb', async () =>
  expect(decimal[colors.indexOf('olivedrab')].join()).toEqual([107, 142, 35].join()));
it('=> orange -> rgb', async () => expect(decimal[colors.indexOf('orange')].join()).toEqual([255, 165, 0].join()));
it('=> orangered -> rgb', async () => expect(decimal[colors.indexOf('orangered')].join()).toEqual([255, 69, 0].join()));
it('=> orchid -> rgb', async () => expect(decimal[colors.indexOf('orchid')].join()).toEqual([218, 112, 214].join()));
it('=> palegoldenrod -> rgb', async () =>
  expect(decimal[colors.indexOf('palegoldenrod')].join()).toEqual([238, 232, 170].join()));
it('=> palegreen -> rgb', async () =>
  expect(decimal[colors.indexOf('palegreen')].join()).toEqual([152, 251, 152].join()));
it('=> paleturquoise -> rgb', async () =>
  expect(decimal[colors.indexOf('paleturquoise')].join()).toEqual([175, 238, 238].join()));
it('=> palevioletred -> rgb', async () =>
  expect(decimal[colors.indexOf('palevioletred')].join()).toEqual([219, 112, 147].join()));
it('=> papayawhip -> rgb', async () =>
  expect(decimal[colors.indexOf('papayawhip')].join()).toEqual([255, 239, 213].join()));
it('=> peachpuff -> rgb', async () =>
  expect(decimal[colors.indexOf('peachpuff')].join()).toEqual([255, 218, 185].join()));
it('=> peru -> rgb', async () => expect(decimal[colors.indexOf('peru')].join()).toEqual([205, 133, 63].join()));
it('=> pink -> rgb', async () => expect(decimal[colors.indexOf('pink')].join()).toEqual([255, 192, 203].join()));
it('=> plum -> rgb', async () => expect(decimal[colors.indexOf('plum')].join()).toEqual([221, 160, 221].join()));
it('=> powderblue -> rgb', async () =>
  expect(decimal[colors.indexOf('powderblue')].join()).toEqual([176, 224, 230].join()));
it('=> purple -> rgb', async () => expect(decimal[colors.indexOf('purple')].join()).toEqual([128, 0, 128].join()));
it('=> rebeccapurple -> rgb', async () =>
  expect(decimal[colors.indexOf('rebeccapurple')].join()).toEqual([102, 51, 153].join()));
it('=> red -> rgb', async () => expect(decimal[colors.indexOf('red')].join()).toEqual([255, 0, 0].join()));
it('=> rosybrown -> rgb', async () =>
  expect(decimal[colors.indexOf('rosybrown')].join()).toEqual([188, 143, 143].join()));
it('=> royalblue -> rgb', async () =>
  expect(decimal[colors.indexOf('royalblue')].join()).toEqual([65, 105, 225].join()));
it('=> saddlebrown -> rgb', async () =>
  expect(decimal[colors.indexOf('saddlebrown')].join()).toEqual([139, 69, 19].join()));
it('=> salmon -> rgb', async () => expect(decimal[colors.indexOf('salmon')].join()).toEqual([250, 128, 114].join()));
it('=> sandybrown -> rgb', async () =>
  expect(decimal[colors.indexOf('sandybrown')].join()).toEqual([244, 164, 96].join()));
it('=> seagreen -> rgb', async () => expect(decimal[colors.indexOf('seagreen')].join()).toEqual([46, 139, 87].join()));
it('=> seashell -> rgb', async () =>
  expect(decimal[colors.indexOf('seashell')].join()).toEqual([255, 245, 238].join()));
it('=> sienna -> rgb', async () => expect(decimal[colors.indexOf('sienna')].join()).toEqual([160, 82, 45].join()));
it('=> silver -> rgb', async () => expect(decimal[colors.indexOf('silver')].join()).toEqual([192, 192, 192].join()));
it('=> skyblue -> rgb', async () => expect(decimal[colors.indexOf('skyblue')].join()).toEqual([135, 206, 235].join()));
it('=> slateblue -> rgb', async () =>
  expect(decimal[colors.indexOf('slateblue')].join()).toEqual([106, 90, 205].join()));
it('=> slategray -> rgb', async () =>
  expect(decimal[colors.indexOf('slategray')].join()).toEqual([112, 128, 144].join()));
it('=> slategrey -> rgb', async () =>
  expect(decimal[colors.indexOf('slategrey')].join()).toEqual([112, 128, 144].join()));
it('=> snow -> rgb', async () => expect(decimal[colors.indexOf('snow')].join()).toEqual([255, 250, 250].join()));
it('=> springgreen -> rgb', async () =>
  expect(decimal[colors.indexOf('springgreen')].join()).toEqual([0, 255, 127].join()));
it('=> steelblue -> rgb', async () =>
  expect(decimal[colors.indexOf('steelblue')].join()).toEqual([70, 130, 180].join()));
it('=> tan -> rgb', async () => expect(decimal[colors.indexOf('tan')].join()).toEqual([210, 180, 140].join()));
it('=> teal -> rgb', async () => expect(decimal[colors.indexOf('teal')].join()).toEqual([0, 128, 128].join()));
it('=> thistle -> rgb', async () => expect(decimal[colors.indexOf('thistle')].join()).toEqual([216, 191, 216].join()));
it('=> tomato -> rgb', async () => expect(decimal[colors.indexOf('tomato')].join()).toEqual([255, 99, 71].join()));
it('=> turquoise -> rgb', async () =>
  expect(decimal[colors.indexOf('turquoise')].join()).toEqual([64, 224, 208].join()));
it('=> violet -> rgb', async () => expect(decimal[colors.indexOf('violet')].join()).toEqual([238, 130, 238].join()));
it('=> wheat -> rgb', async () => expect(decimal[colors.indexOf('wheat')].join()).toEqual([245, 222, 179].join()));
it('=> white -> rgb', async () => expect(decimal[colors.indexOf('white')].join()).toEqual([255, 255, 255].join()));
it('=> whitesmoke -> rgb', async () =>
  expect(decimal[colors.indexOf('whitesmoke')].join()).toEqual([245, 245, 245].join()));
it('=> yellow -> rgb', async () => expect(decimal[colors.indexOf('yellow')].join()).toEqual([255, 255, 0].join()));
it('=> yellowgreen -> rgb', async () =>
  expect(decimal[colors.indexOf('yellowgreen')].join()).toEqual([154, 205, 50].join()));

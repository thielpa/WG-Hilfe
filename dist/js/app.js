/*!
 * Copyright 2015 Werdenfels-Gymnasium All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
angular.module("wgHilfe",["ngMaterial","ngRoute"]).config(function($mdThemingProvider){$mdThemingProvider.definePalette("soft-orange",{50:"FBE9E7",100:"FFCCBC",200:"FFAB91",300:"FF8A65",400:"FF7043",500:"FF7043",600:"F4511E",700:"E64A19",800:"D84315",900:"BF360C",A100:"FF9E80",A200:"FF6E40",A400:"FF3D00",A700:"DD2C00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"}),$mdThemingProvider.theme("default").primaryPalette("soft-orange")}).run(function($rootScope,$mdSidenav){$rootScope.toggleSidenav=function(){$mdSidenav("left").toggle()}}),angular.module("wgHilfe").directive("mdMenuItem",function(){return{require:"^mdMenuList",restrict:"EA",template:"<md-button>Test</md-button>"}});
//import Handlebars from 'handlebars/runtime';
//my handlebars constructor
import {RenderHB} from './RenderHB';
//templates
import {container_1_tpl} from './templates/container_1';
import {container_2_tpl} from './templates/container_2';
//data
import {dt_container_1} from './data/dt_container_1.js';
import {dt_container_2} from './data/dt_container_2.js';
//elements
import {element_1, element_2} from './elements';

var HB_container_1 = new RenderHB(element_1, container_1_tpl, dt_container_1);
HB_container_1.render();
var HB_container_2 = new RenderHB(element_2, container_2_tpl, dt_container_2);
HB_container_2.render();

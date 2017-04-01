import index from '../views/index';

import goods from '../components/goods';
import ratings from '../components/ratings';
import seller from '../components/seller';
import select from '../components/select';

import test from '../views/test';
import list from '../views/list';
import example from '../views/example';

import exampleVuex from '../tip/example_vuex';
import exampleEvent from '../tip/example_event';
import exampleModel from '../tip/example_model';
import exampleParent from '../tip/example_parent';


export default [
	{
	  path: '/',
	  component: index
	},{
	  path: '/select',
	  component: select
	}, {
	  path: '/goods',
	  component: goods
	}, {
	  path: '/ratings',
	  component: ratings
	}, {
	  path: '/seller',
	  component: seller
	}, {
	  path: '/test',
	  component: test
	}, {
	  path: '/list',
	  component: list
	}, {
	  path: '/example',
	  component: example
	}, {
	  path: '/exampleVuex',
	  component: exampleVuex
	}, {
	  path: '/exampleEvent',
	  component: exampleEvent
	}, {
	  path: '/exampleModel',
	  component: exampleModel
	}, {
	  path: '/exampleParent',
	  component: exampleParent
	}
];

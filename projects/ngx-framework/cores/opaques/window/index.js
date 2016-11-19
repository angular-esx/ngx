import { OpaqueToken } from '@angular/core';

export var WINDOW_TOKEN = new OpaqueToken('window');

export var WINDOW_PROVIDERS = { provide: WINDOW_TOKEN, useValue: window };
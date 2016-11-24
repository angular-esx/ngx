import { OpaqueToken } from '@angular/core';

export var DOCUMENT_TOKEN = new OpaqueToken('document');

export var DOCUMENT_PROVIDERS = { provide: DOCUMENT_TOKEN, useValue: document };
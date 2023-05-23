import { InjectionToken } from '@angular/core';

export interface ComponentConfig {
  color: string;
  backgroundColor: string;
  borderRadius: string;
}

export const CONFIG_TOKEN = new InjectionToken<ComponentConfig>(
  'component_config'
);

export const DEFAULT_CONFIG: ComponentConfig = {
  color: 'red',
  backgroundColor: 'black',
  borderRadius: '1rem',
};

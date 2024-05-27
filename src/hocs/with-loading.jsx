import { AppLoaderComponent } from '@/features/app-loader/app-loader-component';
import needsAuthentication from './requires-permssion';
import { getLoadingState } from '@/features/app-loader/app-loader-reducer';
import PrimaryButton from '@/features/primary-button';

// needsAuthentication is curried and takes ( NotPermittedComponent,selector,PermittedComponent) in that order
// here we pass the notPermittedComponent and the condition that makes the component 'notPermitted'
export default needsAuthentication(AppLoaderComponent, getLoadingState);
export const ButtonLoadingComponent = needsAuthentication(PrimaryButton, getLoadingState)

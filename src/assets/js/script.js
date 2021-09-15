import { currentCopywritingTime } from './copywriting-time';
import './mailchimp-subscription';

document.addEventListener('DOMContentLoaded', onData);

function onData() {
  currentCopywritingTime();
}
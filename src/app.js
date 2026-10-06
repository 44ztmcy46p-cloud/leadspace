import { Application } from '@hotwired/stimulus';
import { initializeIcons } from './icons.js';
import ModalController from './controllers/modal_controller.js';
initializeIcons();
const application = Application.start();
application.register('modal', ModalController);

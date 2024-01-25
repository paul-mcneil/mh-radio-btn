import { bindable, bindingMode, TaskQueue, autoinject } from 'aurelia-framework';

@autoinject
export class MhRadioButton {
    @bindable({defaultBindingMode: bindingMode.twoWay}) private value: any;
    @bindable private model: any;
    @bindable private label: string;
    @bindable private name: string;
    @bindable private autoFocus: boolean = false;
    private focus: boolean = false;
    private id = Math.random();

    constructor(private taskQueue: TaskQueue) { }

    attached() {
        if(this.autoFocus) {
            this.taskQueue.queueTask(() => this.focus=true)
        }
    }
}

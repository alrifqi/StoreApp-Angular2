/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/admin/auth.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../../app/model/auth.service';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import14 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import15 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import16 from '../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import17 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import18 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from '@angular/router/src/router_state';
import * as import22 from '@angular/common/src/directives/ng_if';
import * as import23 from '@angular/forms/src/directives/default_value_accessor';
import * as import24 from '@angular/forms/src/directives/validators';
import * as import25 from '@angular/forms/src/validators';
import * as import26 from '@angular/forms/src/directives/control_value_accessor';
import * as import27 from '@angular/forms/src/directives/ng_model';
import * as import28 from '@angular/forms/src/directives/ng_control';
import * as import29 from '@angular/forms/src/directives/ng_control_status';
import * as import30 from '@angular/router/src/directives/router_link';
import * as import31 from '@angular/forms/src/directives/ng_form';
import * as import32 from '@angular/forms/src/directives/control_container';
export class Wrapper_AuthComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AuthComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.AuthComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AuthComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AuthComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AuthComponent>;
  _AuthComponent_0_3:Wrapper_AuthComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AuthComponent_Host0,renderType_AuthComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AuthComponent0(this.viewUtils,this,0,this._el_0);
    this._AuthComponent_0_3 = new Wrapper_AuthComponent(this.injectorGet(import8.Router,this.parentIndex),this.injectorGet(import9.AuthService,this.parentIndex));
    this.compView_0.create(this._AuthComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AuthComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AuthComponent) && (0 === requestNodeIndex))) { return this._AuthComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AuthComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AuthComponentNgFactory:import7.ComponentFactory<import0.AuthComponent> = new import7.ComponentFactory<import0.AuthComponent>('ng-component',View_AuthComponent_Host0,import0.AuthComponent);
const styles_AuthComponent:any[] = ([] as any[]);
class View_AuthComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_AuthComponent1,renderType_AuthComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import11.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','bg-danger m-t-1 p-a-1 text-xs-center'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = import3.inlineInterpolate(1,'\n        ',this.parentView.context.errorMessage,'\n    ');
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_AuthComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_AuthComponent,{});
export class View_AuthComponent0 extends import1.AppView<import0.AuthComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import10.ViewContainer;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import12.Wrapper_NgIf;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _NgForm_12_3:import13.Wrapper_NgForm;
  _ControlContainer_12_4:any;
  _NgControlStatusGroup_12_5:import14.Wrapper_NgControlStatusGroup;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _DefaultValueAccessor_19_3:import15.Wrapper_DefaultValueAccessor;
  _RequiredValidator_19_4:import16.Wrapper_RequiredValidator;
  _NG_VALIDATORS_19_5:any[];
  _NG_VALUE_ACCESSOR_19_6:any[];
  _NgModel_19_7:import17.Wrapper_NgModel;
  _NgControl_19_8:any;
  _NgControlStatus_19_9:import14.Wrapper_NgControlStatus;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _text_26:any;
  _el_27:any;
  _DefaultValueAccessor_27_3:import15.Wrapper_DefaultValueAccessor;
  _RequiredValidator_27_4:import16.Wrapper_RequiredValidator;
  _NG_VALIDATORS_27_5:any[];
  _NG_VALUE_ACCESSOR_27_6:any[];
  _NgModel_27_7:import17.Wrapper_NgModel;
  _NgControl_27_8:any;
  _NgControlStatus_27_9:import14.Wrapper_NgControlStatus;
  _text_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  _RouterLink_32_3:import18.Wrapper_RouterLink;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AuthComponent0,renderType_AuthComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'nav',new import3.InlineArray2(2,'class','navbar navbar-fixed-top navbar-inverse'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray2(2,'class','navbar-brand'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'SPORTS STORE Admin',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'style','margin-top: 50px;'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_6,(null as any));
    this._vc_8 = new import10.ViewContainer(8,6,this,this._anchor_8);
    this._TemplateRef_8_5 = new import19.TemplateRef_(this,8,this._anchor_8);
    this._NgIf_8_6 = new import12.Wrapper_NgIf(this._vc_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_6,'div',new import3.InlineArray2(2,'class','p-a-1'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'form',new import3.InlineArray2(2,'novalidate',''),(null as any));
    this._NgForm_12_3 = new import13.Wrapper_NgForm((null as any),(null as any));
    this._ControlContainer_12_4 = this._NgForm_12_3.context;
    this._NgControlStatusGroup_12_5 = new import14.Wrapper_NgControlStatusGroup(this._ControlContainer_12_4);
    this._text_13 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n                ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'Name',(null as any));
    this._text_18 = this.renderer.createText(this._el_14,'\n                ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_14,'input',new import3.InlineArray8(6,'class','form-control','name','username','required',''),(null as any));
    this._DefaultValueAccessor_19_3 = new import15.Wrapper_DefaultValueAccessor(this.renderer,new import20.ElementRef(this._el_19));
    this._RequiredValidator_19_4 = new import16.Wrapper_RequiredValidator();
    this._NG_VALIDATORS_19_5 = [this._RequiredValidator_19_4.context];
    this._NG_VALUE_ACCESSOR_19_6 = [this._DefaultValueAccessor_19_3.context];
    this._NgModel_19_7 = new import17.Wrapper_NgModel(this._ControlContainer_12_4,this._NG_VALIDATORS_19_5,(null as any),this._NG_VALUE_ACCESSOR_19_6);
    this._NgControl_19_8 = this._NgModel_19_7.context;
    this._NgControlStatus_19_9 = new import14.Wrapper_NgControlStatus(this._NgControl_19_8);
    this._text_20 = this.renderer.createText(this._el_14,'\n            ',(null as any));
    this._text_21 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_12,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'\n                ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_22,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'Password',(null as any));
    this._text_26 = this.renderer.createText(this._el_22,'\n                ',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_22,'input',new import3.InlineArray8(8,'class','form-control','name','password','required','','type','password'),(null as any));
    this._DefaultValueAccessor_27_3 = new import15.Wrapper_DefaultValueAccessor(this.renderer,new import20.ElementRef(this._el_27));
    this._RequiredValidator_27_4 = new import16.Wrapper_RequiredValidator();
    this._NG_VALIDATORS_27_5 = [this._RequiredValidator_27_4.context];
    this._NG_VALUE_ACCESSOR_27_6 = [this._DefaultValueAccessor_27_3.context];
    this._NgModel_27_7 = new import17.Wrapper_NgModel(this._ControlContainer_12_4,this._NG_VALIDATORS_27_5,(null as any),this._NG_VALUE_ACCESSOR_27_6);
    this._NgControl_27_8 = this._NgModel_27_7.context;
    this._NgControlStatus_27_9 = new import14.Wrapper_NgControlStatus(this._NgControl_27_8);
    this._text_28 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._text_29 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._el_30 = import3.createRenderElement(this.renderer,this._el_12,'div',new import3.InlineArray2(2,'class','text-xs-center'),(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'\n                ',(null as any));
    this._el_32 = import3.createRenderElement(this.renderer,this._el_30,'button',new import3.InlineArray4(4,'class','btn btn-secondary','routerLink','/'),(null as any));
    this._RouterLink_32_3 = new import18.Wrapper_RouterLink(this.parentView.injectorGet(import8.Router,this.parentIndex),this.parentView.injectorGet(import21.ActivatedRoute,this.parentIndex));
    this._text_33 = this.renderer.createText(this._el_32,'Go back',(null as any));
    this._text_34 = this.renderer.createText(this._el_30,'\n                ',(null as any));
    this._el_35 = import3.createRenderElement(this.renderer,this._el_30,'button',new import3.InlineArray4(4,'class','btn btn-primary','type','submit'),(null as any));
    this._text_36 = this.renderer.createText(this._el_35,'Log In',(null as any));
    this._text_37 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._text_38 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._text_39 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_40 = this.renderer.createText(this._el_6,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_12,new import3.InlineArray8(6,'ngSubmit',(null as any),'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_12));
    this._NgForm_12_3.subscribe(this,this.eventHandler(this.handleEvent_12),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_19,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_19));
    this._NgModel_19_7.subscribe(this,this.eventHandler(this.handleEvent_19),true);
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_27,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_27));
    this._NgModel_27_7.subscribe(this,this.eventHandler(this.handleEvent_27),true);
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_32,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_32));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._text_37,
      this._text_38,
      this._text_39,
      this._text_40
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import22.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6.context; }
    if (((token === import23.DefaultValueAccessor) && (19 === requestNodeIndex))) { return this._DefaultValueAccessor_19_3.context; }
    if (((token === import24.RequiredValidator) && (19 === requestNodeIndex))) { return this._RequiredValidator_19_4.context; }
    if (((token === import25.NG_VALIDATORS) && (19 === requestNodeIndex))) { return this._NG_VALIDATORS_19_5; }
    if (((token === import26.NG_VALUE_ACCESSOR) && (19 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_19_6; }
    if (((token === import27.NgModel) && (19 === requestNodeIndex))) { return this._NgModel_19_7.context; }
    if (((token === import28.NgControl) && (19 === requestNodeIndex))) { return this._NgControl_19_8; }
    if (((token === import29.NgControlStatus) && (19 === requestNodeIndex))) { return this._NgControlStatus_19_9.context; }
    if (((token === import23.DefaultValueAccessor) && (27 === requestNodeIndex))) { return this._DefaultValueAccessor_27_3.context; }
    if (((token === import24.RequiredValidator) && (27 === requestNodeIndex))) { return this._RequiredValidator_27_4.context; }
    if (((token === import25.NG_VALIDATORS) && (27 === requestNodeIndex))) { return this._NG_VALIDATORS_27_5; }
    if (((token === import26.NG_VALUE_ACCESSOR) && (27 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_27_6; }
    if (((token === import27.NgModel) && (27 === requestNodeIndex))) { return this._NgModel_27_7.context; }
    if (((token === import28.NgControl) && (27 === requestNodeIndex))) { return this._NgControl_27_8; }
    if (((token === import29.NgControlStatus) && (27 === requestNodeIndex))) { return this._NgControlStatus_27_9.context; }
    if (((token === import30.RouterLink) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) { return this._RouterLink_32_3.context; }
    if (((token === import31.NgForm) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._NgForm_12_3.context; }
    if (((token === import32.ControlContainer) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._ControlContainer_12_4; }
    if (((token === import29.NgControlStatusGroup) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._NgControlStatusGroup_12_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_8_0_0:any = (this.context.errorMessage != (null as any));
    this._NgIf_8_6.check_ngIf(currVal_8_0_0,throwOnChange,false);
    this._NgIf_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    this._NgForm_12_3.ngDoCheck(this,this._el_12,throwOnChange);
    this._NgControlStatusGroup_12_5.ngDoCheck(this,this._el_12,throwOnChange);
    this._DefaultValueAccessor_19_3.ngDoCheck(this,this._el_19,throwOnChange);
    const currVal_19_1_0:any = '';
    this._RequiredValidator_19_4.check_required(currVal_19_1_0,throwOnChange,false);
    this._RequiredValidator_19_4.ngDoCheck(this,this._el_19,throwOnChange);
    const currVal_19_2_0:any = 'username';
    this._NgModel_19_7.check_name(currVal_19_2_0,throwOnChange,false);
    const currVal_19_2_1:any = this.context.username;
    this._NgModel_19_7.check_model(currVal_19_2_1,throwOnChange,false);
    this._NgModel_19_7.ngDoCheck(this,this._el_19,throwOnChange);
    this._NgControlStatus_19_9.ngDoCheck(this,this._el_19,throwOnChange);
    this._DefaultValueAccessor_27_3.ngDoCheck(this,this._el_27,throwOnChange);
    const currVal_27_1_0:any = '';
    this._RequiredValidator_27_4.check_required(currVal_27_1_0,throwOnChange,false);
    this._RequiredValidator_27_4.ngDoCheck(this,this._el_27,throwOnChange);
    const currVal_27_2_0:any = 'password';
    this._NgModel_27_7.check_name(currVal_27_2_0,throwOnChange,false);
    const currVal_27_2_1:any = this.context.password;
    this._NgModel_27_7.check_model(currVal_27_2_1,throwOnChange,false);
    this._NgModel_27_7.ngDoCheck(this,this._el_27,throwOnChange);
    this._NgControlStatus_27_9.ngDoCheck(this,this._el_27,throwOnChange);
    const currVal_32_0_0:any = '/';
    this._RouterLink_32_3.check_routerLink(currVal_32_0_0,throwOnChange,false);
    this._RouterLink_32_3.ngDoCheck(this,this._el_32,throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    this._NgControlStatusGroup_12_5.checkHost(this,this,this._el_12,throwOnChange);
    this._RequiredValidator_19_4.checkHost(this,this,this._el_19,throwOnChange);
    this._NgControlStatus_19_9.checkHost(this,this,this._el_19,throwOnChange);
    this._RequiredValidator_27_4.checkHost(this,this,this._el_27,throwOnChange);
    this._NgControlStatus_27_9.checkHost(this,this,this._el_27,throwOnChange);
  }
  destroyInternal():void {
    this._vc_8.destroyNestedViews();
    this._NgModel_19_7.ngOnDestroy();
    this._NgModel_27_7.ngOnDestroy();
    this._NgForm_12_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 8)) { return new View_AuthComponent1(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    return (null as any);
  }
  handleEvent_12(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgForm_12_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngSubmit')) {
      const pd_sub_0:any = ((<any>this.context.authenticate(this._NgForm_12_3.context)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_19(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_19_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.username = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_27(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_27_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.password = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_32(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLink_32_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
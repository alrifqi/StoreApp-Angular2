/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/admin/productTable.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/product.repository';
import * as import9 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/router/src/directives/router_link';
import * as import15 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/common/src/pipes/number_pipe';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/core/src/i18n/tokens';
import * as import20 from '@angular/common/src/directives/ng_for';
export class Wrapper_ProductTableComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ProductTableComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.ProductTableComponent(p0);
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
var renderType_ProductTableComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_ProductTableComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ProductTableComponent>;
  _ProductTableComponent_0_3:Wrapper_ProductTableComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ProductTableComponent_Host0,renderType_ProductTableComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ProductTableComponent0(this.viewUtils,this,0,this._el_0);
    this._ProductTableComponent_0_3 = new Wrapper_ProductTableComponent(this.injectorGet(import8.ProductRepository,this.parentIndex));
    this.compView_0.create(this._ProductTableComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._ProductTableComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ProductTableComponent) && (0 === requestNodeIndex))) { return this._ProductTableComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ProductTableComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ProductTableComponentNgFactory:import7.ComponentFactory<import0.ProductTableComponent> = new import7.ComponentFactory<import0.ProductTableComponent>('ng-component',View_ProductTableComponent_Host0,import0.ProductTableComponent);
const styles_ProductTableComponent:any[] = ([] as any[]);
class View_ProductTableComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _RouterLink_16_3:import9.Wrapper_RouterLink;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  _pipe_currency_0_0:any;
  _arr_29:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_ProductTableComponent1,renderType_ProductTableComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_24 = import11.UNINITIALIZED;
    this._expr_25 = import11.UNINITIALIZED;
    this._expr_26 = import11.UNINITIALIZED;
    this._expr_27 = import11.UNINITIALIZED;
    this._arr_29 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'tr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n                ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'button',new import3.InlineArray2(2,'class','btn btn-sm btn-warning'),(null as any));
    this._RouterLink_16_3 = new import9.Wrapper_RouterLink(this.parentView.parentView.injectorGet(import12.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import13.ActivatedRoute,this.parentView.parentIndex));
    this._text_17 = this.renderer.createText(this._el_16,'\n                        Edit\n                ',(null as any));
    this._text_18 = this.renderer.createText(this._el_14,'\n                ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_14,'button',new import3.InlineArray2(2,'class','btn btn-sm btn-danger'),(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'\n                    Delete\n                ',(null as any));
    this._text_21 = this.renderer.createText(this._el_14,'\n            ',(null as any));
    this._text_22 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._pipe_currency_0_0 = import3.pureProxy4((<View_ProductTableComponent0>this.parentView)._pipe_currency_0.transform.bind((<View_ProductTableComponent0>this.parentView)._pipe_currency_0));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_16,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_16));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_19,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_19));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.RouterLink) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._RouterLink_16_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import11.ValueUnwrapper();
    const currVal_16_0_0:any = this._arr_29('/admin/main/products/edit',this.context.$implicit.id);
    this._RouterLink_16_3.check_routerLink(currVal_16_0_0,throwOnChange,false);
    this._RouterLink_16_3.ngDoCheck(this,this._el_16,throwOnChange);
    const currVal_24:any = import3.inlineInterpolate(1,'',this.context.$implicit.id,'');
    if (import3.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setText(this._text_3,currVal_24);
      this._expr_24 = currVal_24;
    }
    const currVal_25:any = import3.inlineInterpolate(1,'',this.context.$implicit.name,'');
    if (import3.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this.renderer.setText(this._text_6,currVal_25);
      this._expr_25 = currVal_25;
    }
    const currVal_26:any = import3.inlineInterpolate(1,'',this.context.$implicit.category,'');
    if (import3.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setText(this._text_9,currVal_26);
      this._expr_26 = currVal_26;
    }
    valUnwrapper.reset();
    const currVal_27:any = import3.inlineInterpolate(1,'',valUnwrapper.unwrap(import3.castByValue(this._pipe_currency_0_0,(<View_ProductTableComponent0>this.parentView)._pipe_currency_0.transform)(this.context.$implicit.price,'USD',true,'2.2-2')),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_27,currVal_27))) {
      this.renderer.setText(this._text_12,currVal_27);
      this._expr_27 = currVal_27;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_16(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLink_16_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_19(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.deleteProduct(this.context.$implicit.id)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_ProductTableComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_ProductTableComponent,{});
export class View_ProductTableComponent0 extends import1.AppView<import0.ProductTableComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _anchor_21:any;
  /*private*/ _vc_21:import10.ViewContainer;
  _TemplateRef_21_5:any;
  _NgFor_21_6:import15.Wrapper_NgFor;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _RouterLink_25_3:import9.Wrapper_RouterLink;
  _text_26:any;
  _pipe_currency_0:import16.CurrencyPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ProductTableComponent0,renderType_ProductTableComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'table',new import3.InlineArray2(2,'class','table table-sm table-striped'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'thead',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'tr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'ID',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_4,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Name',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_4,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'Category',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_4,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Price',(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_4,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_16 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_18 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_0,'tbody',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'\n        ',(null as any));
    this._anchor_21 = this.renderer.createTemplateAnchor(this._el_19,(null as any));
    this._vc_21 = new import10.ViewContainer(21,19,this,this._anchor_21);
    this._TemplateRef_21_5 = new import17.TemplateRef_(this,21,this._anchor_21);
    this._NgFor_21_6 = new import15.Wrapper_NgFor(this._vc_21.vcRef,this._TemplateRef_21_5,this.parentView.injectorGet(import18.IterableDiffers,this.parentIndex),this.ref);
    this._text_22 = this.renderer.createText(this._el_19,'\n    ',(null as any));
    this._text_23 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_24 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,parentRenderNode,'button',new import3.InlineArray4(4,'class','btn btn-primary','routerLink','/admin/main/products/create'),(null as any));
    this._RouterLink_25_3 = new import9.Wrapper_RouterLink(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex));
    this._text_26 = this.renderer.createText(this._el_25,'\n    Create New Product\n',(null as any));
    this._pipe_currency_0 = new import16.CurrencyPipe(this.parentView.injectorGet(import19.LOCALE_ID,this.parentIndex));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_25,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_25));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._anchor_21,
      this._text_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (21 === requestNodeIndex))) { return this._TemplateRef_21_5; }
    if (((token === import20.NgFor) && (21 === requestNodeIndex))) { return this._NgFor_21_6.context; }
    if (((token === import14.RouterLink) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._RouterLink_25_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_21_0_0:any = this.context.getProducts();
    this._NgFor_21_6.check_ngForOf(currVal_21_0_0,throwOnChange,false);
    this._NgFor_21_6.ngDoCheck(this,this._anchor_21,throwOnChange);
    const currVal_25_0_0:any = '/admin/main/products/create';
    this._RouterLink_25_3.check_routerLink(currVal_25_0_0,throwOnChange,false);
    this._RouterLink_25_3.ngDoCheck(this,this._el_25,throwOnChange);
    this._vc_21.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_21.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 21)) { return new View_ProductTableComponent1(this.viewUtils,this,21,this._anchor_21,this._vc_21); }
    return (null as any);
  }
  handleEvent_25(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLink_25_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
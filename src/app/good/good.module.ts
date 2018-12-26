import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GoodRoutingModule } from './good-routing.module'

import { SharedModule } from '../shared/shared.module'

import { IndexComponent } from './index/index.component'
import { GoodDetailComponent } from './good-detail/good-detail.component'

import { CateHover } from './index/cate_hover.directive'


@NgModule({
  declarations: [
    IndexComponent,
    GoodDetailComponent,
    CateHover
  ],
  imports: [
    CommonModule,
    GoodRoutingModule,
    SharedModule
  ]
})
export class GoodModule { }

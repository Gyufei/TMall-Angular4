import { Component, OnInit } from '@angular/core';

import { Cate } from '@app/core/model/good';
import { GoodService } from '@app/core/services/good.service';

@Component({
  selector: 'app-carousel-side-cate',
  templateUrl: './carousel-side-cate.component.html',
  styleUrls: ['./carousel-side-cate.component.scss']
})
export class CarouselSideCateComponent implements OnInit {
  public all_cate_good: Cate[]; // 所有的分类
  public sub_cate  // 轮播侧边栏分类的子分类
  public hover_cate_id: number // 轮播侧边栏保持hover效果的分类id


  constructor(private goodService: GoodService) { }

  ngOnInit() {
    this.get_all_cate();
  }

  public get_all_cate() {
    this.goodService.get_index_cate().subscribe((res) => {
      this.all_cate_good = res;
    })
  }

  public get_sub_cate(id: number) {
    this.goodService.get_sub_cate(id).subscribe((res) => {
      this.sub_cate = res;
    })
  }

  // 鼠标移动到菜单分类上时显示详情菜单
  public cate_enter(id: number): void {
    this.get_sub_cate(id)
    this.hover_cate_id = id;
  }

  // 鼠标离开菜单分类
  public cate_leave(id: number): void {
    this.hover_cate_id = null;
    setTimeout(() => {
      if (this.hover_cate_id == null) this.sub_cate = null;
    })
  }

  // 鼠标点击菜单分类
  public cate_click(id: number): void {
  }

  // 鼠标进入子菜单时 主菜单保持 hover 效果
  public sub_cate_enter(id: number): void {
    this.hover_cate_id = id;
  }

  public sub_cate_leave(id: number): void {
    this.hover_cate_id = null;
    this.sub_cate = null;
  }
}

import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts'

class ItemData {
  name: string;
  value: number;
}
class SliceData {
  selectedSlice: ItemData = null;
  selectedSlicePos: number = -1;
  isLastItem: boolean = false;
}
@Component({
  selector: 'app-doughnut-chart-resize',
  templateUrl: './doughnut-chart-resize.component.html',
  styleUrls: ['./doughnut-chart-resize.component.css']
})
export class DoughnutChartResizeComponent implements OnInit {
  dataList = [
    {
      "name": "Germany",
      "value": 30
    },
    {
      "name": "USA",
      "value": 20
    },
    {
      "name": "France",
      "value": 10
    },
    {
      "name": "Egypt",
      "value": 40
    }
  ];

  // options
  view: any[] = [700, 400];
  showLegend = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', 'blue', 'orange', 'black',]
  };
  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = true;
  animations = true;
  sliceData: SliceData = null;
  intervalIncrementObj = null;
  intervalDecrementObj = null;
  valueSymbol = "%";
  trimLabels = false;
  maxLabelLength=100;

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
    this.sliceData = new SliceData();
    this.sliceData.selectedSlice = event;
    this.sliceData.selectedSlicePos = this.getSlicePosition(this.sliceData.selectedSlice);
    this.sliceData.isLastItem = this.checkIsLastItem(this.sliceData.selectedSlicePos);
    console.log("sliceData= ",this.sliceData);
  }
  getSlicePosition(selectedSlice) {
    return this.dataList.findIndex((ctg) => {
      return ctg.name == selectedSlice.name && ctg.value == selectedSlice.value;
    });
  }
  checkIsLastItem(selectedSlicePos: number) {
    if (selectedSlicePos === (this.dataList.length - 1)) {
      return true;
    }
    return false;
  }
  onMouseDown(isIncrement: boolean) {
    if (isIncrement) {
      this.intervalIncrementObj = setInterval(() => {
        this.onClick(true);
      }, 200);
    }
    else {
      this.intervalDecrementObj = setInterval(() => {
        this.onClick(false);
      }, 200);
    }

  }
  onMouseUp(isIncrement: boolean) {
    if (isIncrement) {
      if (this.intervalIncrementObj) {
        clearInterval(this.intervalIncrementObj);
      }
    }
    else {
      if (this.intervalDecrementObj) {
        clearInterval(this.intervalDecrementObj);
      }
    }

  }
  onClick(isIncrement: boolean) {
    console.log("will onClick");
    if (this.sliceData === null) {
      return;
    }

    if (isIncrement) {
      this.incrementItem(this.sliceData);
    }
    else {
      this.decrementItem(this.sliceData);
    }

  }
  incrementItem(sliceData: SliceData) {
    // increment the current item
    this.dataList[sliceData.selectedSlicePos].value = sliceData.selectedSlice.value + 1;
    sliceData.selectedSlice = this.dataList[sliceData.selectedSlicePos];
    if (sliceData.isLastItem) {
      // decrement the previous item
      this.dataList[sliceData.selectedSlicePos - 1].value = this.dataList[sliceData.selectedSlicePos - 1].value - 1;
    }
    else {
      // decrement the next item
      this.dataList[sliceData.selectedSlicePos + 1].value = this.dataList[sliceData.selectedSlicePos + 1].value - 1;
    }

    this.dataList = [...this.dataList];
  }


  decrementItem(sliceData: SliceData) {
    // increment the current item
    this.dataList[sliceData.selectedSlicePos].value = sliceData.selectedSlice.value - 1;
    sliceData.selectedSlice = this.dataList[sliceData.selectedSlicePos];
    if (sliceData.isLastItem) {
      // increment the previous item
      this.dataList[sliceData.selectedSlicePos - 1].value = this.dataList[sliceData.selectedSlicePos - 1].value + 1;
    }
    else {
      // increment the next item
      this.dataList[sliceData.selectedSlicePos + 1].value = this.dataList[sliceData.selectedSlicePos + 1].value + 1;
    }

    this.dataList = [...this.dataList];
  }

  tooltipText = (item) => {
    return item.data.name + "<br/>" +
      this.valueSymbol + " " + item.data.value;
  }

  labelFormatting = (label) => {
    let index = this.dataList.findIndex((i) => {
      return i.name.toLowerCase() === label.toLowerCase();
    });
    return label + " (" + this.valueSymbol + " " + this.dataList[index].value + ")";
  }

  isSelected(item:ItemData){
    if(this.sliceData){
      return this.sliceData.selectedSlice.name.toLocaleLowerCase() === item.name.toLowerCase();
    }
    return false;
  }
}

export default class MinHeap {
  public length: number;
  private data: number[];
  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }
  delete(): number {
    const out = this.data[0];
    if (this.length === 0) {
      return -1;
    }
    if (this.length === 1) {
      this.data = [];
      this.length--;
      return out;
    }
    this.length--;
    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }
    const parentIdx = this.parent(idx);
    if (this.data[idx] < this.data[parentIdx]) {
      const x = this.data[idx]
      this.data[idx] = this.data[parentIdx];
      this.data[parentIdx] = x;
      this.heapifyUp(parentIdx);
    }
  }

  private heapifyDown(idx: number): void {
    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);

    if (idx >= this.length || lIdx >= this.length) {
      return;
    }

    const lV = this.data[lIdx];
    const rV = this.data[rIdx];
    const v = this.data[idx];
    if (lV > rV && v > rV) {
      this.data[idx] = rV;
      this.data[rIdx] = v;
      this.heapifyDown(rIdx);
    } else if (rV > lV && v > lV) {
      this.data[idx] = lV;
      this.data[lIdx] = v;
      this.heapifyDown(lIdx);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return (2 * idx + 1);
  }

  private rightChild(idx: number): number {
    return (2 * idx + 2);
  }
}

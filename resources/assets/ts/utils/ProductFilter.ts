class ProductFilter {
  static readonly valueList = ['All', 'Handbags', 'Man bags', 'Backpacks'];

  private readonly _valueList;
  private readonly _selectedIndex: number;
  private readonly _clientId: string;

  private constructor(selectedIndex: number, clientId: string) {
    this._selectedIndex = selectedIndex;
    this._clientId = clientId;
    this._valueList = ProductFilter.valueList;
  }

  private checkHandbags = (orderSet: object) => {
    return orderSet.clientId === this._clientId;
  }

  static init = (selectedIndex: number, clientId: string): ProductFilter => {
     return new ProductFilter(selectedIndex, clientId);
  }

  getSelectedValue = () => {
    return this._valueList[this._selectedIndex];
  }

  getValues = (): string[] => {
    return this._valueList;
  }

  match = (orderSet: object): boolean => {
    const selectedValue = this.getSelectedValue();

    switch (selectedValue) {
      case "All": return true;
      case "Handbags": return this.checkHandbags(orderSet);
    }
  }
}

export default ProductFilter;
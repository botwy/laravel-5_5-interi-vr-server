


class FilterEnum {
  static All = new FilterEnum('All', 'Все');
  static Men = new FilterEnum('Men', 'Мужские');
  static Handbags = new FilterEnum('Handbags', 'Женские');

  private static filters = [
   FilterEnum.All,
   FilterEnum.Men,
   FilterEnum.Handbags,
  ]

  private static selectedFilter: FilterEnum;

  value: string;
  title: string;

  private constructor(value: string, title: string) {
    this.value = value;
    this.title = title;
  }

  static setCurrentFilter(selectedIndex: number) {
    return FilterEnum.filters[selectedIndex];
  }

  compare() {
    switch (FilterEnum.selectedFilter) {
      case FilterEnum.All: return true;
      case FilterEnum.Men: () => {}
    }
  }
}

enum EFilter {
  All,
  Men,
}

namespace EFilter {
  export const mapToMatcher = {
    All: () => {},
    Men: (product) => product === 'sumka',
  }
}

EFilter.mapToMatcher[EFilter.All]
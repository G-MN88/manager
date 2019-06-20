import _ from 'lodash'
const buildFilterParams = (...args) => {
    const buildFieldRule = (key, value) => {
      const fields = key.split('-');
      const vals = [];
      if (fields.length === 1) {
        vals.push(value);
      } else {
        vals.push(...value);
      }
      return fields.map((field, i) => {
        let $$index = field.indexOf('$$');
        if ($$index > -1) {
          // 需再次解析的字段，例如 startTime$lte$$timestamp@date
          // 根据@后面的数据类型解析
          let dateType = field.substring($$index + 2); // timestamp@date
          value = _parseItemValue(vals[i], dateType);
          field = field.substring(0, $$index); // startTime$lte
        } else {
          value = vals[i];
        }
        let $index = field.indexOf('$');
        let op = 'eq';
        if ($index > -1) {
          op = field.substring($index + 1); // lte
          if (op.endsWith('Ex')) {
            // status$inEx => status$in
            op = op.substring(0, op.length - 2);
          }
          field = field.substring(0, $index); // startTime
        }
        return { field: field, op: op, value: value };
      });
    };
    const _params = _.assign({}, ...args);
    const filterGroup = {
      op: 'and',
      groups: [{ op: 'and', rules: [] }]
    };
    const searchRule = {};
    for (let key in _params) {
      switch (key) {
        case 'page':
        case 'pageSize':
        case 'orderBy':
        case 'distinct':
          // 分页或者排序字段
          searchRule[key] = _params[key];
          break;
        default:
          if (key.includes('$$or')) {
            const orGroups = { op: 'or', groups: [] };
            filterGroup.groups.push(orGroups);
            const orParams = _.isArray(_params[key]) ? _params[key] : [_params[key]]; // convert to Array
            orParams.forEach((orParamsItem) => {
              const newGroupItem = { op: 'and', rules: [] };
              orGroups.groups.push(newGroupItem);
              for (let orKey in orParamsItem) {
                newGroupItem.rules.push(...buildFieldRule(orKey, orParamsItem[orKey]));
              }
            });
          } else {
            const value = _params[key];
            if (value != null) {
              filterGroup.groups[0].rules.push(...buildFieldRule(key, value));
            }
          }
      }
    }
  
    return { filterGroup, searchRule };
  };
  export default buildFilterParams 
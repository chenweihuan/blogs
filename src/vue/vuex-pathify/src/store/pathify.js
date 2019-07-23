import pathify from 'vuex-pathify'

// set options
pathify.options.mapping = function (type, name, formatters) {
    switch(type) {
      case 'mutations':
        return formatters.const('mu', name) // MU_FOO
      case 'actions':
        return formatters.camel('ac', name) // acFoo
      case 'getters':
        return formatters.camel('ge', name) // getterFoo
    }
    return name // foo
  }

// re-export
export default pathify

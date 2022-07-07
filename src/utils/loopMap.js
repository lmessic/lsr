/*testData() {
  const data = [
    {
      id: 1,
      name: '爷爷',
    },
    {
      id: 10,
      parentId: 1,
      name: '父亲',
    },
    {
      id: 15,
      parentId: 10,
      name: '儿子',
    },
    {
      id: 16,
      parentId: 10,
      name: '女儿',
    },
    {
      id: 17,
      parentId: 16,
      name: 'cat',
    },
    {
      id: 11,
      parentId: 1,
      name: '妻子'
    }
  ]
  let initData = [...data]
  let treeData = this.handleTreeData(data)
  let childIds = this.handleChildId(treeData)
  let allIds = childIds.flat()
  let mapId = new Map()
  allIds.forEach(ele => {
    let ids = [ele]
    let loopMapId = (initData, ele) => {
      let otherIds = initData.filter(node => node.id != ele)
      initData.forEach(item => {
        if (item.id == ele && item.parentId) {
          ids.push(item.parentId)
          if (otherIds.length) {
            loopMapId(otherIds, item.parentId)
          }
        }
      })
    }
    loopMapId(initData, ele)
    mapId.set(ele, ids)
  })
  console.log([...mapId.values()]);
  [...mapId.values()].forEach(ids => {
    console.log(ids);
  })

},
handleTreeData(data) {
  let treeData = data.filter(item => !item.parentId)

  let childData = data.filter(item => item.parentId)

  let loopMapData = (parentData, childData) => {
    parentData.forEach(item => {
      item.children = childData.filter(ele => ele.parentId == item.id)
      let otherData = childData.filter(ele => ele.parentId != item.id)

      if (otherData.length) {
        loopMapData(item.children, otherData)
      }
    })
  }
  loopMapData(treeData, childData)

  return treeData;
},
handleChildId(data) {
  let idMaps = new Map()

  let loopMapIds = (data, id) => {
    data.forEach(item => {

      if (item.children && item.children.length) {
        loopMapIds(item.children, item.id)
      } else {
        idMaps.set(item.id, [item.id])
      }
    })
  }
  loopMapIds(data)
  return [...idMaps.values()]
},*/

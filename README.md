# vueselect [![Build Status](https://travis-ci.org/cx0der/vueselect.svg?branch=master)](https://travis-ci.org/cx0der/vueselect)

> Native accessible Vue.js component similar to &lt;select&gt;

#### Features
* Accessible
* Zero dependencies

## Install
```
npm install vueselect
```

#### Using
```
import VueSelect from 'VueSelect'
<VueSelect :items="['Option1', 'Option2']"></VueSelect>
```

#### Syncing selected values
```
<VueSelect :items="selectOptions" :value.sync="val"/>
```

## Properties
* items
```
An Array of strings
```
* value
```
Preset set value
```

## LICENSE
[GPL 2](https://github.com/cx0der/vueselect/blob/master/LICENSE)

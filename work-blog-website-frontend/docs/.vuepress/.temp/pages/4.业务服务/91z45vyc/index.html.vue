<template><div><table>
<thead>
<tr>
<th>数值类型</th>
<th>字节</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>TINYINT[UNSIGNED]</code></td>
<td>1</td>
<td>很小的整数，默认有符号 <br/> <code v-pre>[-128,127]/[0,255]</code></td>
</tr>
<tr>
<td><code v-pre>SMALLINT[UNSIGNED]</code></td>
<td>2</td>
<td>较小的整数，默认有符号 <br/> <code v-pre>[-32768,32767]/[0,65535]</code></td>
</tr>
<tr>
<td><code v-pre>MEDIUMINT[UNSIGNED]</code></td>
<td>3</td>
<td>中等的整数，默认有符号 <br/> <code v-pre>[-8388608,8388607]/[0,16777215]</code></td>
</tr>
<tr>
<td><code v-pre>INT[UNSIGNED]</code>/<code v-pre>INTEGER[UNSIGNED]</code></td>
<td>4</td>
<td>标准的整数，默认有符号 <br/> <code v-pre>[-2147483648,2147483647]/[0,4294967295]</code></td>
</tr>
<tr>
<td><code v-pre>BIGINT[UNSIGNED]</code></td>
<td>8</td>
<td>较大的整数，默认有符号 <br> <code v-pre>[-9223372036854775808,9223372036854775807]/[0,18446744073709551615]</code></td>
</tr>
</tbody>
</table>
<p>如果插入了超出对应字段合法范围的数据，<code v-pre>MySQL</code> 就会拒绝插入的行为，因此在 <code v-pre>MySQL</code> 看来，所有能插入的数据都是合法的，因此数据类型实际上就是一种约束（我们以后再来好好理解这个词，现在先简单了解一下），倒逼程序员进行正确的操作，保证数据插入的合法性。</p>
<h1 id="_2-二进制类型" tabindex="-1"><a class="header-anchor" href="#_2-二进制类型"><span>2.二进制类型</span></a></h1>
<table>
<thead>
<tr>
<th>二进制类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>BIT(M)</code></td>
<td>位类型，<code v-pre>M</code> 为指定位数，默认值为 <code v-pre>1</code>，范围为 <code v-pre>[1-64]</code></td>
</tr>
<tr>
<td><code v-pre>TINYBLOB</code></td>
<td>很小的二进制数据</td>
</tr>
<tr>
<td><code v-pre>BLOB</code></td>
<td>二进制大对象</td>
</tr>
<tr>
<td><code v-pre>MEDIUMBLOB</code></td>
<td>中等大小的二进制数据</td>
</tr>
<tr>
<td><code v-pre>LONGBLOB</code></td>
<td>较大的二进制数据</td>
</tr>
</tbody>
</table>
<p><code v-pre>MySQL</code> 通常按照 <code v-pre>ASCII</code> 码值显示的，因此无法直接显示位类型的 <code v-pre>0/1</code> ，我们可以使用十进制来查看（例如 <code v-pre>select hex(bit_data) from table_name;</code>）。</p>
<p>而因此插入的一些二进制值达到 <code v-pre>ASCII</code> 的合法范围时，就会显示出对应的 <code v-pre>ASCII</code> 字符。</p>
<h1 id="_3-小数类型" tabindex="-1"><a class="header-anchor" href="#_3-小数类型"><span>3.小数类型</span></a></h1>
<table>
<thead>
<tr>
<th>小数类型</th>
<th>字节</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>FLOAT[(M,D)][UNSIGNED]</code></td>
<td>4</td>
<td>单精度浮点数，默认有符号，<code v-pre>M</code> 为显示长度，<code v-pre>D</code> 为小数位数/精度</td>
</tr>
<tr>
<td><code v-pre>DOUBLE[(M,D)][UNSIGNED]</code></td>
<td></td>
<td>双精度浮点数，默认有符号</td>
</tr>
<tr>
<td><code v-pre>DECIMAL(M,D)[UNSIGNED]</code></td>
<td></td>
<td>定点数，适用于存储精确的小数，默认有符号</td>
</tr>
</tbody>
</table>
<p>浮点类型如果规定了小数点的位数，则显示的长度里包含小数点规定的位数（但是不包含小数点），例如插入 <code v-pre>10.0</code> 会显示 <code v-pre>10.00</code>，插入 <code v-pre>100.1</code> 会插入失败（实际插入的是 <code v-pre>100.10</code>）。</p>
<p>但是如果插入多余的小数位，会发生四舍五入的存储，例如插入 <code v-pre>10.016</code>，实际插入的值是 <code v-pre>10.02</code>。</p>
<p>因此也无法插入 <code v-pre>99.996</code>，但是允许插入 <code v-pre>99.9900001</code>。</p>
<p>一般浮点数的数值很大，一般不会关心一个浮点数的大小，用户只需要根据自己的需求设置显示位数和精度即可。</p>
<p>浮点类型可能存在较大的数据缺失问题，而定点数类型则可以尽可能规避这个问题（如果希望精度更高就需要使用 <code v-pre>decimal</code> 类型）。</p>
<h1 id="_4-文本类型" tabindex="-1"><a class="header-anchor" href="#_4-文本类型"><span>4.文本类型</span></a></h1>
<table>
<thead>
<tr>
<th>文本类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>CHAR(L)</code></td>
<td>定长字符串，<code v-pre>L</code> 为存储长度，最大值为 <code v-pre>255</code>，单位是一个“字符”</td>
</tr>
<tr>
<td><code v-pre>VARCHAR(L)</code></td>
<td>变长字符串，<code v-pre>L</code> 的最大值为 <code v-pre>65535</code> 个“字节”，但是其中有 <code v-pre>1~3</code> 个字节需要记录数据大小，因此有效字节数为 <code v-pre>65532</code>。在 <code v-pre>utf8</code> 中也就是最多 <code v-pre>65532/3=21844</code> 个字符（<code v-pre>*3</code>），在 <code v-pre>gbk</code> 中也就是 <code v-pre>65532/2=32766</code>（也就是说，具体字符个数和所用编码密切相关）。</td>
</tr>
<tr>
<td><code v-pre>BINARY</code></td>
<td>定长二进制字符串</td>
</tr>
<tr>
<td><code v-pre>VARBINARY</code></td>
<td>变长二进制字符串</td>
</tr>
<tr>
<td><code v-pre>TINYTEXT</code></td>
<td>很小的文本数据</td>
</tr>
<tr>
<td><code v-pre>TEXT</code></td>
<td>普通的文本数据</td>
</tr>
<tr>
<td><code v-pre>MEDIUMTEXT</code></td>
<td>中等的文本数据</td>
</tr>
<tr>
<td><code v-pre>LONGTEXT</code></td>
<td>较大的文本数据</td>
</tr>
</tbody>
</table>
<p>不定长的字符串可以会影响查询效率，但是空间利用率较高。在使用 <code v-pre>varchar</code> 类型是，上限就是 <code v-pre>L</code>，是“有多少用多少，不超过 <code v-pre>L</code>”，而定长的字符串是“就算只有这么多，也会占用 <code v-pre>L</code>”，两者的区别类似 <code v-pre>C/C++</code> 的 <code v-pre>char s[size]</code> 和 <code v-pre>std::string str</code> 的区别。</p>
<p>另外需要注意一个汉字字符也是一个字符，这点很特殊，即使一个中文汉字用多个字节表示，也依旧可以使用 <code v-pre>char(1)</code> 来表示（但是需要注意有时候会报字符集不匹配的错误）。</p>
<blockquote>
<p>疑惑：关于 <code v-pre>VARCHAR(L)</code> 中的 <code v-pre>L</code> 是字符个数还是字节个数，貌似不同版本的 <code v-pre>MySQL</code> 是不一样的。</p>
</blockquote>
<h1 id="_5-时间类型" tabindex="-1"><a class="header-anchor" href="#_5-时间类型"><span>5.时间类型</span></a></h1>
<table>
<thead>
<tr>
<th>时间类型</th>
<th>字节</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>DATE</code></td>
<td>3</td>
<td>日期值，格式为 <code v-pre>yyyy-mm-dd</code>，对于时间精度只需要到天数时就使用该类型，需要程序员自己登记修改</td>
</tr>
<tr>
<td><code v-pre>DATETIME</code></td>
<td>8</td>
<td>日期和时间值，格式为 <code v-pre>yyyy-mm-dd HH:ii:ss</code>，需要程序员自己登记修改</td>
</tr>
<tr>
<td><code v-pre>TIMESTAMP</code></td>
<td>4</td>
<td>时间戳，格式和 <code v-pre>DATETIME</code> 一样，该字段会自动填入（若使用 <code v-pre>UPDATE table_name set field_name='new_value'</code>  更新同一项的其他字段数据时，将会自动更新），因此时间戳经常被用于数据被更新的最近时间点，无需程序员自己登记修改</td>
</tr>
<tr>
<td><code v-pre>TIME</code></td>
<td></td>
<td>时间</td>
</tr>
<tr>
<td><code v-pre>YEAR</code></td>
<td></td>
<td>年份</td>
</tr>
</tbody>
</table>
<h1 id="_6-复合类型" tabindex="-1"><a class="header-anchor" href="#_6-复合类型"><span>6.复合类型</span></a></h1>
<table>
<thead>
<tr>
<th>复合类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ENUM</code></td>
<td>枚举（单选）。只是设定若干选项，最终在单元格中只存储了一个实际值，枚举值的大小范围为 <code v-pre>[1,65535]</code>，使用方法和 <code v-pre>C/C++</code> 的枚举体类似，枚举字段的数据只允许填入之前枚举出的所有值。并且，如果插入的数字是合法范围的值，也会转为为对应的枚举标识（如果忽略该字段会自动填入 <code v-pre>NULL</code>，使用 <code v-pre>0</code> 作为插入会导致非法操作）</td>
</tr>
<tr>
<td><code v-pre>SET</code></td>
<td>集合（多选）。和枚举不同，一个列可以拥有多个值，多个值作为一个字段数据插入的时候，整体看作一个字符串即可。并且我们还可以使用数字来插入数据，该数字为 <code v-pre>0001</code> 代表四个元素中的第一个元素，若为 <code v-pre>0101</code> 则代表四个元素中的第一、第三个元素（如果忽略该字段会自动填入 <code v-pre>NULL</code>，使用 <code v-pre>0</code> 作为插入会导致为空）</td>
</tr>
</tbody>
</table>
<p>使用 <code v-pre>FIND_IN_SET(SUB, STR_LIST)</code> 可以来查找集合中是否有某“一个”元素，若 <code v-pre>sub</code> 这个单一元素在 <code v-pre>str_list(不要在逗号后面加空格)</code>  集合中则返回其下标，若不存在则返回 <code v-pre>0</code>。</p>
<p>而如果我们直接使用 <code v-pre>where field_name='new_value'</code> 子句来查询集合时，采用的是严格匹配法，我们需要不严格匹配时，就需要使用上述 <code v-pre>find_in_set()</code> 的接口。</p>
<p>也就是使用 <code v-pre>SELECT * FROM table_name WHERE FIND_IN_SET(sub, STR_LIST)</code> 来查询，这样只要有一个元素存在于集合字段中，就可以被查询出来。</p>
<p>而如果希望包含多个元素，就需要使用 <code v-pre>AND</code> 来级联多个接口，也就是使用 <code v-pre>SELECT * FROM table_name WHERE FIND_IN_SET(sub_1, STR_LIST) AND FIND_IN_SET(sub_2, STR_LIST) AND ...</code></p>
<blockquote>
<p>补充：<code v-pre>NULL</code> 和 <code v-pre>(空)</code> 是两种东西。</p>
</blockquote>
<h1 id="_7-布尔类型" tabindex="-1"><a class="header-anchor" href="#_7-布尔类型"><span>7.布尔类型</span></a></h1>
<table>
<thead>
<tr>
<th>布尔类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>BOOL</code></td>
<td>使用 <code v-pre>0/1</code> 表示“真/假”</td>
</tr>
</tbody>
</table>
<p>使用起来较简单，略，待补充...</p>
</div></template>



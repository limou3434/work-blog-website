#!/bin/bash
# 自动生成环境变量模板，一般情况下部署用户不需要使用，这是留给开发者使用的脚本
# @author <a href="https://github.com/limou3434">limou3434</a>

# 开启出错即止
set -e

# 公司名称
COMPANYI='work'

# 定义颜色
GREEN='\033[0;32m[info]'  # 提示
RED='\033[0;31m[erro]'    # 错误
YELLOW='\033[1;33m[wrin]' # 警告
END='\033[0m'             # 重置

# 重要交互
confirm_input() {
    # 读取用户输入
    echo -e "${YELLOW} 该操作比较重要，需要您手动检查，是否继续操作?（使用 “y” 或 “回车” 确认，其他字符均视为 “取消”） ${END}"
    read -r choice
    
    # 判断是否继续执行
    if [ -z "$choice" ] || [ "$choice" = "y" ]; then
        echo -e "${GREEN} 继续执行 ${END}"
        return 0 # 返回继续执行的判断
    else
        echo -e "${RED} 取消执行，已经停止项目的部分启动过程！ ${END}"
        return 1 # 返回取消执行的判断
    fi
}

# 环境变量源头文件
SOURCE_FILE=".env"

# 环境变量模板文件
TEMPLATE_FILE=".env.template"

# 检查源头文件是否存在
if [ ! -f "$SOURCE_FILE" ]; then
  echo -e "${RED} 源文件 $SOURCE_FILE 不存在，请确认文件路径是否正确 ${END}"
  exit 1
fi

# 清空旧的模板文件
echo -e "${GREEN} 是否继续清空模板文件？ ${END}"
confirm_input
>"$TEMPLATE_FILE"

echo -e "${GREEN} 正在读取 $SOURCE_FILE，生成空值模板中 ${END}"

# 核心逻辑：逐行处理
while IFS= read -r line; do
  # 保留空行、注释行（以 “#” 开头）、纯空格行
  if [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]]; then
    echo "$line" >>"$TEMPLATE_FILE"
    continue
  fi

  # 处理变量行，只保留 “变量名=”，清空值
  if [[ "$line" =~ ^([^=]+)= ]]; then # 匹配格式：任意字符=任意字符（支持等号前后有空格）
    # 提取等号前的变量名（含空格）
    var_name="${BASH_REMATCH[1]}"

    # 去除变量名前后空格，拼接「变量名=」写入模板
    clean_var_name=$(echo "$var_name" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')
    echo "${clean_var_name}=" >>"$TEMPLATE_FILE"
  else
    # 非变量行（无等号）直接保留
    echo "$line" >>"$TEMPLATE_FILE"
  fi
done <"$SOURCE_FILE"

echo -e "${GREEN} 模板生成完成！文件路径：$TEMPLATE_FILE ${END}"
echo -e "${GREEN} \n📌 模板文件内容预览： ${END}"
cat "$TEMPLATE_FILE"

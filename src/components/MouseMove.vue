<template>
	<div>鼠标x坐标：{{x}}</div>
	<div>鼠标y坐标：{{y}}</div>
</template>
<script setup>
	import useMouse from '../utils/useMouse.ts'

	const {x, y} = useMouse()
</script>
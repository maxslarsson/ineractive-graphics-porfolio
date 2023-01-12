<script>
	import githubAvatar from '$lib/assets/githubAvatar.png';
	import mailIcon from '$lib/assets/mail.svg';
	import globeIcon from '$lib/assets/globe.svg';
	import githubIcon from '$lib/assets/github.svg';
</script>

<div class="md:fixed">
	<div class="md:block flex justify-center items-center">
		<img src={githubAvatar} alt="me" class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full" />
		<div class="mb-2 mx-7 mt-4 justify-center items-center">
			<h1 class="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100">Max Larsson</h1>
			<div class="md:text-lg text-gray-600 dark:text-blue-100">Student</div>
		</div>
		<a href="mailto:max_larsson@dalton.org" class="text-gray-600 md:hidden mt-1 dark:text-blue-100"
			>max_larsson@dalton.org</a
		>
		<a href="mailto:maxslarsson@gmail.com" class="text-gray-600 md:hidden mt-1 dark:text-blue-100"
			>maxslarsson@gmail.com</a
		>
	</div>
	<div class="mx-7 hidden md:block">
		<div class="my-2 text-gray-600 flex dark:text-blue-100 space-x-1">
			<img src={mailIcon} alt="Mail icon" />
			<a href="mailto:max_larsson@dalton.org">max_larsson@dalton.org</a>
		</div>
		<div class="my-2 text-gray-600 flex dark:text-blue-100 space-x-1">
			<img src={mailIcon} alt="Mail icon" />
			<a href="mailto:maxslarsson@gmail.com">maxslarsson@gmail.com</a>
		</div>
		<div class="my-2 text-gray-600 flex dark:text-blue-100 space-x-1">
			<img src={globeIcon} alt="Globe icon" />
			<p>New York, NY</p>
		</div>
		<div class="my-2 text-gray-600 flex dark:text-blue-200 space-x-1">
			<img src={githubIcon} alt="GitHub icon" />
			<a href="https://github.com/maxslarsson">maxslarsson</a>
		</div>
	</div>
</div>

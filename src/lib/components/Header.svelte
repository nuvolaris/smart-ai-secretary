<script>
	import { page } from '$app/stores';
	$: route = $page.route.id;
</script>

<header>
	<div class="grid grid-cols-1 grid-cols-2">
		<div class="rounded-lg">
			<nav aria-label="Breadcrumb" class="flex">
				<ol class="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
					<li class="flex items-center">
						<a
							href="/"
							class="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
							<span
								class="ms-1.5 font-semibold {route == '/' ? 'text-primary' : ''} hover:opacity-75"
							>
								Home
							</span>
						</a>
					</li>

					<li class="relative flex items-center">
						<span
							class="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
						>
						</span>

						<a
							href="/waitlist"
							class="flex h-10 items-center bg-white pe-4 ps-8 font-semibold transition
						{route == '/waitlist' ? 'text-primary' : ''} hover:opacity-75"
						>
							Gpt List
						</a>
					</li>
				</ol>
			</nav>
		</div>
		<div class="rounded-lg flex justify-end text-right m-2">
			<ul class="flex gap-3">
				<li>
					<a
						href="https://www.linkedin.com/company/nuvolaris-io/"
						rel="noreferrer"
						target="_blank"
						class="text-gray-700 transition hover:opacity-75"
					>
						<span class="sr-only">LinkedIn</span>

						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
							<path
								d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
							/></svg
						>
					</a>
				</li>

				<li>
					<a
						href="https://x.com/nuvolarisio"
						rel="noreferrer"
						target="_blank"
						class="text-gray-700 transition hover:opacity-75"
					>
						<span class="sr-only">X</span>

						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"
							><path
								d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"
							/></svg
						>
					</a>
				</li>

				<li>
					<a
						href="https://github.com/nuvolaris"
						rel="noreferrer"
						target="_blank"
						class="text-gray-700 transition hover:opacity-75"
					>
						<span class="sr-only">GitHub</span>

						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">
							<path
								d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"
							/></svg
						>
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/@nuvolarisio"
						rel="noreferrer"
						target="_blank"
						class="text-gray-700 transition hover:opacity-75"
					>
						<span class="sr-only">Youtube</span>

						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"
							><path
								d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
							/></svg
						>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<h1 class="text-4xl mt-10 md:text-7xl text-center text-primary font-extrabold">
		🎅🏻 MASTROGPT.com
		<p class="block font-extrabold text-primary text-xl md:text-3xl">improve your creativity</p>
	</h1>
</header>

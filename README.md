Craft CMS Startingpoint
==========


### Getting started


1. Drag and drop your craft installation folders `craft` and `public` into the root of this repo

2. Update your `craft/config/db.php` file to mach this:

```
	'server' => 'localhost',
	'user' => 'root',
	'password' => 'foobar',
	'database' => 'craft',
	'tablePrefix' => 'craft',

```

3. Run `mv public/htaccess public/.htaccess`

4. Run `mv app public`

6. run `vagrant up`

6. add `10.101.194.198  craft.dev` to your `/etc/hosts` file

7. Run `npm install && gulp`

8. You should be readdy to go!


### Feedback & Bugs

We would love your feedback on how this could be improved. Send us a message or a pull request with updates so that we can review it. 

Also please report any bugs you may experience so that we can remove them once and for all.


---

Credits: [Ole Andreas Jørnsen herland](https://github.com/Gogoro) & [Stian Grytøyr](https://github.com/stiang)

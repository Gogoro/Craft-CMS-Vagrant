
Craft CMS Startingpoint
==========

1. Drag and drop your craft installation into this folder (`craft` and `public`)

2. Update your `craft/config/db.php` file to mach this:

```
// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
	'server' => 'localhost',
	'user' => 'root',
	'password' => 'foobar',
	'database' => 'craft',
	'tablePrefix' => 'craft',

```

3. run `vagrant up`

4. add `10.101.194.198  craft.dev` to your `/etc/hosts` file

5. You should be readdy to go!

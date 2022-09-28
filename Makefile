.PHONY:package
package:
	zip -r -FS ../aws_colors.zip * --exclude '*.git*' --exclude README.md --exclude Makefile

from django.db import models



class Size(models.Model):
    size = models.CharField(max_length=255, null=True)
    slug = models.CharField(max_length=255, null=True)

    def __str__(self) -> str:
        return self.size

class Product(models.Model):
    name = models.CharField(max_length=255, null=True)
    description = models.TextField(null=True)
    image = models.ImageField(upload_to='products/', null=True)
    review = models.DecimalField(max_digits=2, decimal_places=1, null=True)
    sizes = models.ForeignKey(Size, on_delete=models.PROTECT, null=True)
    price = models.IntegerField(null=True)
    discount = models.IntegerField(max_length=2, null=True, blank=True)
    count = models.PositiveIntegerField(null=True, blank=True)


    def __str__(self):
        return F"{self.name} - {self.sizes}"